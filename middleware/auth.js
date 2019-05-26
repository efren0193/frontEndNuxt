export default function ({ store, redirect, next}) {
  //console.log(store.getters.getAuth)
    if (!store.state.authUser) {
      redirect('/login')
    }
  }