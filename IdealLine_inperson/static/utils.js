window.onbeforeunload = function() { return "Are you sure you want to go back? Your data will not be saved..."; }

document.addEventListener('keyup', function(e){
    const {ipcRenderer} = require('electron')
    if (e.key === 'Escape') { ipcRenderer.sendSync('close-me', 0); console.log('quitting app') }
})

// next
// async function next(expID, subject_id, subject_condition, results, message = 'Thanks for completing that experiment. Click `next` to move on to the next event.') {
//     window.onbeforeunload = false
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             id: subject_id,
//             condition: subject_condition,
//             results: results
//         })
//     }

//     const resp = await fetch('/_next_', options)
//     const resp_data = await resp.json()
//     window.location = resp_data['next_page']

// }

function print(...strings) {
    console.log(...strings)
}



function save(subject) {
    const {ipcRenderer} = require('electron')

    // Synchronous message emmiter and handler
    ipcRenderer.sendSync('synchronous-message', JSON.stringify(subject, null, 4), subject['id'])
    ipcRenderer.sendSync('close-me', 0)
}
