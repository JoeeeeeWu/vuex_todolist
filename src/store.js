import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  items: [],
  activeTask: {}
}

const getters = {
  items: state => state.items,
  activeTask: state => state.activeTask
}

const mutations = {
  addTask (state, task) {
    const myDate = new Date()
    const y = myDate.getFullYear()
    let m = null
    const mm = myDate.getMonth() + 1
    if (mm < 10) {
      m = `0${mm}`
    } else {
      m = mm
    }
    let d = null
    const dd = myDate.getDate()
    if (dd < 10) {
      d = `0${dd}`
    } else {
      d = dd
    }
    const currentTime = y + m + d
    state.items.push({
      task,
      isFinished: false,
      details: 'this is a new task',
      setTime: currentTime
    })
  },
  deleteTask (state, index) {
    state.items.splice(index, 1)
  },
  setActivetask (state, item) {
    state.activeTask = item
  },
  editTask (state, task) {
    state.activeTask.task = task
    for (let i in state.items) {
      if (i === state.activeTask) {
        i.task = task
      }
    }
  },
  editDetails (state, details) {
    state.activeTask.details = details
    for (let i in state.items) {
      if (i === state.activeTask) {
        i.detials = details
      }
    }
  },
  editSettime (state, settime) {
    state.activeTask.setTime = settime
    for (let i in state.items) {
      if (i === state.activeTask) {
        i.setTime = settime
      }
    }
  },
  clearAll (state) {
    state.activeTask = {}
  },
  reList (state) {
    const compare = (propertyName) => {
      return (obj1, obj2) => {
        const value1 = obj1[propertyName]
        const value2 = obj2[propertyName]
        if (value2 < value1) {
          return 1
        } else if (value2 > value1) {
          return -1
        } else {
          return 0
        }
      }
    }
    state.items.sort(compare('setTime'))
  },
  toggleCheck (state, index) {
    state.items[index].isFinished = !state.items[index].isFinished
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
