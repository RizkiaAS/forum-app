const api = {
  register: async (name, email, password) => {
    const res = await fetch('https://forum-api.dicoding.dev/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    const resJson = await res.json()
    const { status, message } = resJson

    if (status !== 'success') throw Error(message)
    return resJson.data.user.name
  },

  login: async (email, password) => {
    const res = await fetch('https://forum-api.dicoding.dev/v1/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const resJson = await res.json()
    const { status, message } = resJson

    if (status !== 'success') throw Error(message)
    return resJson.data.token
  },

  getOwnProfile: async token => {
    const res = await fetch('https://forum-api.dicoding.dev/v1/users/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const resJson = await res.json()
    const { status, message } = resJson

    if (status !== 'success') throw Error(message)
    return resJson.data.user
  },

  getUsers: async () => {
    const res = await fetch('https://forum-api.dicoding.dev/v1/users', { method: 'GET' })
    const resJson = await res.json()
    const { status, message } = resJson

    if (status !== 'success') throw Error(message)
    return resJson.data.users
  },

  getAllThreads: async () => {
    const res = await fetch('https://forum-api.dicoding.dev/v1/threads', { method: 'GET' })
    const resJson = await res.json()
    const { status, message } = resJson

    if (status !== 'success') throw Error(message)
    return resJson.data.threads
  },

  getThread: async (threadId) => {
    const res = await fetch(`https://forum-api.dicoding.dev/v1/threads/${threadId}`, { method: 'GET' })
    const resJson = await res.json()
    const { status, message } = resJson

    if (status !== 'success') throw Error(message)
    return resJson.data.detailThread
  },

  postThread: async (token, newThread) => {
    const res = await fetch('https://forum-api.dicoding.dev/v1/threads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        title: newThread.title,
        category: newThread.category,
        body: newThread.body
      })
    })
    const resJson = await res.json()
    const { status, message } = resJson

    if (status !== 'success') throw Error(message)
    return resJson.data.thread
  },

  postComment: async (token, threadId, comment) => {
    const res = await fetch(`https://forum-api.dicoding.dev/v1/threads/${threadId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        content: comment
      })
    })
    const resJson = await res.json()
    const { status, message } = resJson

    if (status !== 'success') throw Error(message)
    return resJson.data.comment
  },

  upVoteThread: async (token, threadId) => {
    const res = await fetch(`https://forum-api.dicoding.dev/v1/threads/${threadId}/up-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const resJson = await res.json()
    const { status, message } = resJson

    if (status !== 'success') throw Error(message)
    return resJson.data.vote
  },

  downVoteThread: async (token, threadId) => {
    const res = await fetch(`https://forum-api.dicoding.dev/v1/threads/${threadId}/down-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const resJson = await res.json()
    const { status, message } = resJson

    if (status !== 'success') throw Error(message)
    return resJson.data.vote
  },

  neutralizedVote: async (token, threadId) => {
    const res = await fetch(`https://forum-api.dicoding.dev/v1/threads/${threadId}/neutral-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const resJson = await res.json()
    const { status, message } = resJson

    if (status !== 'success') throw Error(message)
    return resJson.data.vote
  },

  neutralizedComment: async (token, threadId, commentId) => {
    const res = await fetch(`https://forum-api.dicoding.dev/v1/threads/${threadId}/comments/${commentId}/neutral-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const resJson = await res.json()
    const { status, message } = resJson

    if (status !== 'success') throw Error(message)
    return resJson.data.vote
  },

  upComment: async (token, threadId, commentId) => {
    const res = await fetch(`https://forum-api.dicoding.dev/v1/threads/${threadId}/comments/${commentId}/up-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const resJson = await res.json()
    const { status, message } = resJson

    if (status !== 'success') throw Error(message)
    return resJson.data.vote
  },

  downComment: async (token, threadId, commentId) => {
    const res = await fetch(`https://forum-api.dicoding.dev/v1/threads/${threadId}/comments/${commentId}/down-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const resJson = await res.json()
    const { status, message } = resJson

    if (status !== 'success') throw Error(message)
    return resJson.data.vote
  },

  getLeaderboards: async () => {
    const res = await fetch('https://forum-api.dicoding.dev/v1/leaderboards', { method: 'GET' })
    const resJson = await res.json()
    const { status, message } = resJson

    if (status !== 'success') throw Error(message)
    return resJson.data.leaderboards
  }
}

const local = {
  putAccessToken: token => localStorage.setItem('ACCOUNTACCESSKEY', token),

  getAccessToken: () => localStorage.getItem('ACCOUNTACCESSKEY'),

  removeAccessToken: () => localStorage.removeItem('ACCOUNTACCESSKEY')
}
const convertDate = dateString => {
  const date = new Date(dateString)
  const month = date.toLocaleString('en-us', { month: 'short' })
  const day = date.getDate()
  const year = date.getFullYear()
  return month + ' ' + day + ' ' + year
}

export { api, local, convertDate }
