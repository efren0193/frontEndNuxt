export default ({ app }) => {
    // Every time the route changes (fired on initialization too)
    app.router.afterEach((to, from) => {
      if(to.name == 'privacidad' || to.name == 'login'){
        app.context.store.commit('existCarousel', false);
      }else{
        app.context.store.commit('existCarousel', true);
      }
    });
 }