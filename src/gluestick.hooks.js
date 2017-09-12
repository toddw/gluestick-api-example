function hookupAPI (app) {
  app.get("/api/todos", (req, res) => {
    res.end(JSON.stringify({
      name: "hello",
      items: [
        "one",
        "two",
        "another"
      ]
    }));
  });
}

export default {
  preInitServer: () => {},
  postServerRun: [hookupAPI],
  preRenderFromCache: [],
  postRenderRequirements: [],
  preRedirect: [],
  postRenderProps: [],
  postGetCurrentRoute: [],
  postRender: [],
  error: [],
};

