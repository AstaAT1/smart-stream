const errorMessage = document.querySelector('#errorMessage')
const loading = document.querySelector('#loading')
const bodyPage = document.querySelector('#bodyPage')
export async function api() {
    try {
        const url = 'https://6af2e6e842c6561ced399f46.mockapi.io/api/v1/channels'
        const response = await fetch(url)

        if (!response.ok) {
            console.log(errorMessage)
            throw new Error(`HTTP Error: ${response.status}`)

        }
        const data = await response.json()
        console.log(data);
        return data
    }
    catch (error) {
        console.error(error.message)
        errorMessage.classList.remove('hidden')
        bodyPage.classList.add('hidden')
    }
    finally {
        setTimeout(() => {
            loading.classList.add('hidden')

        }, 1500);

    }
}