const makeAPIRequest=(method, url, data={})=>{
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json'); // Set for POST requests

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText))
      } else {
        reject(new Error(`API request failed with status: ${xhr.status}`))
      }
    }

    xhr.onerror = function (error) {
      reject(error)
    }

    if (method === 'POST') {
      xhr.send(JSON.stringify(data))
    } else {
      xhr.send()
    }
  })
}

// Right code
// const getBankBalance=async(uid)=>{
// 	let res = await makeAPIRequest('GET', 'http://localhost:3000/balance?uid='+uid)
// 	return res.balance
// }
// const deposit=async(uid,amount)=>{
// 	let res = await makeAPIRequest('POST', 'http://localhost:3000/deposit', { amount: amount, uid: uid })
// 	return res.balance
// }
// const withdraw=async(uid,amount)=>{
// 	let res = await makeAPIRequest('POST', 'http://localhost:3000/withdraw', { amount: amount, uid: uid })
//   return res.balance
// }

const getBankBalance=async(uid)=>{
	await new Promise(x=>setTimeout(x,1000))
	return 1600
}
const deposit=async(uid,amount)=>{
	await new Promise(x=>setTimeout(x,1000))
	return 1700
}
const withdraw=async(uid,amount)=>{
	await new Promise(x=>setTimeout(x,1000))
  return 1400
}

const db={getBankBalance,deposit,withdraw}
export {db}