const BASE_URL = '/api/users/'

export async function signUp(userData){

    console.log('in users-api. userdata, baseurl is ' , userData , BASE_URL)
    console.log('stringified = ' , JSON.stringify(userData))

    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

    if(res.ok){
        return res.json()
    }else{
        console.log('res not ok')
        throw new Error('Invalid Sign Up')
    }
}

const LOGIN_URL = '/api/users/login'

export async function login(creds){
    //creds are {email, password} need to use bcrypt compare
    const user = await fetch(LOGIN_URL,{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(creds)
    })

    if(user.ok){
        return user.json()
    }else{
        console.log('Bad login.')
        throw new Error('Unable to login with provided information.')
    }
}