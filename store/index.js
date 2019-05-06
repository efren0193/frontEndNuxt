export const state = () => ({
    existCar: true
  })
  
export const mutations = {
  existCarousel(context, component){
      context.existCar = component
  }
}

export const getters = {
  getName: state =>{
    return state.existCar;
  }
}