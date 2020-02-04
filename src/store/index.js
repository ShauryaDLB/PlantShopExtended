import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        image: require("@/assets/img/flowers4.jpg"),
        title: "Rosen aus Hellerau",
        price: 19.9,
        description:
          "Die Rosen (Rosa) sind die namensgebende Pflanzengattung der Familie der Rosengewächse (Rosaceae). Die Gattung umfasst je nach Auffassung des Autors .",
        rating: 3.0,
        reviews: [
          {
            author: "Marco",
            review: "super, meine Frau hat sich gefreut",
            rating: 4.5
          },
          {
            author: "Peter L.",
            review: "bin kein Blumen Fan",
            rating: 1.5
          }
        ]
      },
      {
        id: 2,
        image: require("@/assets/img/flowers10.jpg"),
        title: "Tulpen aus der Neustadt",
        price: 14.99,
        description:
          "Die Tulpen bilden eine Pflanzengattung in der Familie der Liliengewächse. Die etwa 150 Arten sind in Nordafrika und über Europa bis Zentralasien verbreitet.",
        rating: 4.5,
        reviews: [
          {
            author: "Rayk",
            review: "Nicht so toll, blöde Farbe",
            rating: 2.5
          },
          {
            author: "Peter G.",
            review: "Schönes Geschenk",
            rating: 2.5
          }
        ]
      },
      {
        id: 3,
        image: require("@/assets/img/flowers8.jpg"),
        title: "Nelken aus Radebeul",
        price: 12.0,
        description:
          "Die Nelken (Dianthus) bilden eine Pflanzengattung in der Familie der Nelkengewächse (Caryophyllaceae). Die 320 bis 600 Arten kommen in den gemäßigten Zonen vor.",
        rating: 4.0,
        reviews: [
          {
            author: "Romy",
            review: "Sehen toll auf dem Balkon aus.",
            rating: 4.5
          },
          {
            author: "Rober",
            review: "hässlich",
            rating: 0.5
          }
        ]
      },
      {
        id: 4,
        image: require("@/assets/img/flowers9.jpg"),
        title: "Margeriten aus Striesen",
        price: 4.5,
        description:
          "Die Margeriten sind eine Pflanzengattung in der Familie der Korbblütler. Die Gattung umfasst derzeit 42 Arten. Der botanische Name leitet sich von altgriechisch λευκός leukós ‚weiß‘ und ἄνθος ánthos ‚Blüte, Blume‘ ab.",
        rating: 5.0,
        reviews: [
          {
            author: "Lena",
            review: "Schön für eine Hochzeit.",
            rating: 4.5
          }
        ]
      }
    ],
    cartProducts: [],
    posts: [
      {
        id: 1,
        unreadPost: false,
        title: "Was kosten rote Rosen",
        author: "Arvid",
        image: require("@/assets/img/arvid.jpg"),
        created: "20.01.2020",
        viewCount: 56,
        replyCount: 3,
        lastUpdate: "gerade eben",
        lastUpdateBy: "Marco",
        content:
          "Hallo PlantShop, ich würde mich gerne erkundigen, wieviel ich in etwa für rote Rosen ausgeben muss? Mein Budget ist maximal 100 €.",
        replies: [
          {
            author: "Marco Krause",
            content:
              "Hallo Arvid, meistens kosten Rosen 20 - 40 Euro, aber für seltene Exemplare kann man auch mal gut und gerne über 100 Euro auf den Tisch legen.",
            date: "vor 3 Stunden"
          },
          {
            author: "Peter Lohse",
            content:
              "Ich habe letztens im Karstadt welche für 15,- € bekommen.",
            date: "vor 5 Minuten"
          }
        ]
      },
      {
        id: 2,
        unreadPost: true,
        title: "frische Nelken",
        author: "Romy",
        image: require("@/assets/img/romy.jpg"),
        created: "05.01.2020",
        viewCount: 80,
        replyCount: 10,
        lastUpdate: "vor 40 Minuten",
        lastUpdateBy: "Robert",
        content:
          "Wo gibt es frische Nelken hier in Dresden. Ich möchte welche für meine Großmutter kaufen.",
        replies: [
          {
            author: "Peter L.",
            content: "Meistens an der Elbe oder in Gärten",
            date: "vor 9 Stunden"
          },
          {
            author: "Peter L.",
            content: "Oder du schaust mal bei Eby Kleinanzeigen",
            date: "vor 7 Minuten"
          }
        ]
      },
      {
        id: 3,
        unreadPost: true,
        title: "Wann blühen Margeriten",
        author: "Marco",
        image: require("@/assets/img/marco.jpg"),
        created: "13.01.2020",
        viewCount: 200,
        replyCount: 34,
        lastUpdate: "vor 2 Tagen",
        lastUpdateBy: "Lena",
        content:
          "Wann blühen Margeriten den am schönsten. Ich habe gehört im Frühling??",
        replies: [
          {
            author: "Rayk",
            content: "Winter",
            date: "vor 4 Stundne"
          },
          {
            author: "Rayk",
            content: "Ne Herbst",
            date: "gerade eben"
          }
        ]
      },
      {
        id: 4,
        unreadPost: false,
        title: "Wie oft gießt man Tulpen",
        author: "Lena",
        image: require("@/assets/img/lena.jpg"),
        created: "20.01.2020",
        viewCount: 5,
        replyCount: 2,
        lastUpdate: "vor 2 Minuten",
        lastUpdateBy: "Peter L.",
        content:
          "Hallo liebe Community, ich bin mir nicht sicher wie oft ich meine Tulpen gießen muss. Wäre sehr dankbar für HIlfe.",
        replies: [
          {
            author: "Marco Krause",
            content: "Einmal pro Woche reicht?",
            date: "vor 4 Stunden"
          },
          {
            author: "Peter Lohse",
            content: "@Marco: Bist du verrückt? Mindestens 3 mal die Woche.",
            date: "vor 5 Minuten"
          }
        ]
      }
    ],
    newPosts: []
  },
  mutations: {
    add(state, newProduct) {
      state.cartProducts.push(newProduct);
    },
    changeQty(state, payload) {
      state.cartProducts.find(element => element.id == payload.id).qty +=
        payload.qty;
    },
    remove(state, id) {
      const index = state.cartProducts.findIndex(e => e.id === id);
      state.cartProducts.splice(index, 1);
    },
    /* ONLY FOR DEV -> change newPosts to posts if all works */
    SET_POSTS(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    loadPosts({ commit }) {
      axios
        .get("http://localhost:3000/posts")
        .then(res => res.data)
        .then(posts => {
          commit("SET_POSTS", posts);
        });
    }
  },
  modules: {}
});
