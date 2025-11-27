document.addEventListener('DOMContentLoaded',() =>{
    const DataMovie = document.getElementById("data_movie")

    async function GetDataMovie() {
        const url = "https://omdbapi.com/?t=Chainsaw+Man&y=2025&apikey=4e5ca74d";

        try{
            const response = await fetch(url);

            if(!response.ok){
                DataMovie.innerHTML='<p>No se pudo obtener la info.</p>';
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const Data = await response.json();
            console.log(Data);
            
            // ...existing code...
            DataMovie.innerHTML = `
                <div class="bg-black/10 backdrop-blur rounded-2xl shadow-lg p-6 md:p-8 max-w-3xl mx-auto text-left">
                    <h4 class="text-2xl md:text-3xl font-extrabold mb-3 text-[var(--color-accent)]">
                        ${Data.Title} <span class="text-lg font-medium text-[var(--color-p)]">(${Data.Year})</span>
                    </h4>

                    <div class="space-y-2 text-[var(--color-p)]">
                        <p>
                            <span class="inline-block w-32 font-semibold text-[var(--color-accent)]">Director:</span>
                            ${Data.Director}
                        </p>
                        <p>
                            <span class="inline-block w-32 font-semibold text-[var(--color-accent)]">Actores:</span>
                            ${Data.Actors}
                        </p>
                        <p>
                            <span class="inline-block w-32 font-semibold text-[var(--color-accent)]">Género:</span>
                            ${Data.Genre}
                        </p>
                        <p>
                            <span class="inline-block w-32 font-semibold text-[var(--color-accent)]">Duración:</span>
                            ${Data.Runtime}
                        </p>

                        <div class="mt-3">
                            <span class="block font-semibold text-[var(--color-accent)] mb-1">Sinopsis:</span>
                            <p class="leading-relaxed text-[var(--color-p)]">${Data.Plot}</p>
                        </div>

                        <p class="mt-4">
                            <span class="font-semibold text-[var(--color-accent)]">Calificación IMDb:</span>
                            <span class="ml-2 text-yellow-400 font-medium">${Data.imdbRating}</span>
                        </p>
                    </div>
                </div>
            `;
// ...existing code...
        } catch(error){
            DataMovie.innerHTML='<p>Hubo un error chavo.</p>';
            console.log(error);
        }
    }
    GetDataMovie();
})