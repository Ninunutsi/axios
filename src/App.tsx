import axios from "axios";
import "./App.css";

axios.defaults.headers.common["X-AUTH"] = "SOME RANDOM TOKEN";

function App() {
  const FETCH = () => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      console.log(res)
    );
    // .then((r) => console.log(r));
  };

  const AXIOS = () => {
    axios("https://jsonplaceholder.typicode.com/todos").then((res) =>
      console.log(res)
    );

    // axios({
    //   method: "GET",
    //   url: "https://jsonplaceholder.typicode.com/todos",
    // }).then((res) => console.log(res));

    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos", {
    //     params: { _limit: 5 },
    //   })
    //   .then((res) => console.log(res));
  };

  const AXIOSPOST = () => {
    axios({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/todos",
      data: {
        title: "HELLO",
        completed: false,
      },
      timeout: 5000,
    }).then((res) => console.log(res));
    // axios.post(
    //   "https://jsonplaceholder.typicode.com/todos",
    //   { title: "HI" },
    //   config
    // );
  };

  const UPDATE = () => {
    axios({
      method: "PATCH",
      url: "https://jsonplaceholder.typicode.com/todos/1",
      data: {
        title: "HELLO",
        completed: true,
      },
    }).then((res) => console.log(res));
  };

  const DELETE = () => {
    axios({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/todos/1",
    }).then((res) => console.log(res));
  };

  const ALL = () => {
    axios
      .all([
        axios("https://jsonplaceholder.typicode.com/posts/1"),
        axios("https://jsonplaceholder.typicode.com/comments/1"),
      ])
      .then((res) => {
        console.log(res[0].data);
        console.log(res[1].data);
      });
  };

  // axios.interceptors.request.use((config) => {
  //   console.log(config.url);
  //   return config;
  // });

  // const axiosINSTANCE = axios.create({
  //   baseURL: "https://jsonplaceholder.typicode.com",
  // });

  // axiosINSTANCE.get("/posts").then((res) => console.log(res));

  const CANCELTOKEN = () => {
    const source = axios.CancelToken.source();
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        cancelToken: source.token,
      })
      .then((res) => console.log(res))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("ERROR CANCCELED");
        }
      });

    if (true) {
      source.cancel("REQUEST CANNECLED");
    }
  };
  // const ERRROR = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos", {
  //       validateStatus: function (status) {
  //         return status < 500; // Resolve only if the status code is less than 500
  //       },
  //     })
  //     .catch(function (error) {
  //       //resoonse is errro
  //       if (error.response) {
  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //         // request is done but tyhere is no response
  //       } else if (error.request) {
  //         console.log(error.request);
  //       } else {
  //         console.log("Error", error.message);
  //       }
  //     });
  // };

  return (
    <div className="App">
      <button onClick={FETCH}>FETCH GET</button>
      <button onClick={AXIOS}>AXIOS GET</button>
      <button onClick={AXIOSPOST}>AXIOS POST</button>
      <button onClick={UPDATE}>AXIOS UPDATE</button>
      <button onClick={DELETE}>AXIOS DELETE</button>
      <button onClick={ALL}>AXIOS ALL</button>
      <button onClick={CANCELTOKEN}>AXIOS CANCEL</button>
      {/* <button onClick={ERRROR}>AXIOS ERROR</button> */}
    </div>
  );
}

export default App;
