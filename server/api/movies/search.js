export default defineEventHandler((event) => {
    const { query, page } = getQuery(event)
    const config = useRuntimeConfig()
    return $fetch(`${config.apiBaseUrl}/search/movie?query=${query}&page=${page}`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTZjODU0MDE1YzI1MzY0OTg5NTc3MTFlNjRkYTc3ZCIsInN1YiI6IjYzZTYzMjE1ZDI5YmRkMDBjYjBmZjliNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kVx2THURbU2AITDTInwtwvsDoejSO2y7tolfgQpY3aQ`
        }
    })
})