const refresh = document.querySelector('#refresh');
const dismiss = document.querySelector('#dismiss');
const toast = document.querySelector('#toast')
const retry = document.querySelector('#retry')

const displayToast = function () {
    toast.style.display = 'block'
}
const displayRetry = function () {
    retry.style.display = 'block'
}
dismiss.addEventListener('click', function () {
    toast.style.display = 'none'
})
// displayRetry()
 