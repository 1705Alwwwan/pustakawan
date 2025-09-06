document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('bookList');
    const searchInput = document.getElementById('searchInput');

    // Menggunakan data langsung dari books.js
    const booksData = books; 

    const displayBooks = (books) => {
        bookList.innerHTML = ''; // Hapus kartu yang ada

        if (books.length === 0) {
            bookList.innerHTML = `<div class="col-12"><div class="alert alert-info" role="alert">
                Tidak ada buku yang ditemukan.
            </div></div>`;
            return;
        }

        books.forEach(book => {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col');
            colDiv.innerHTML = `
                <div class="card h-100 shadow-sm book-card">
                    <img src="${book.cover || 'https://via.placeholder.com/200x300?text=No+Cover'}" class="card-img-top" alt="Cover Buku" style="height: 200px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text text-muted">${book.author}</p>
                        <div class="mt-auto">
                            <a href="${book.file}" class="btn btn-primary w-100" download="${book.title}.pdf">
                                <i class="fas fa-download me-2"></i>Unduh PDF
                            </a>
                        </div>
                    </div>
                </div>
            `;
            bookList.appendChild(colDiv);
        });
    };

    const filterBooks = (query) => {
        const filteredBooks = booksData.filter(book => {
            const titleMatch = book.title.toLowerCase().includes(query.toLowerCase());
            const authorMatch = book.author.toLowerCase().includes(query.toLowerCase());
            return titleMatch || authorMatch;
        });
        displayBooks(filteredBooks);
    };

    searchInput.addEventListener('input', (event) => {
        filterBooks(event.target.value);
    });

    // Tampilkan buku saat halaman dimuat
    displayBooks(booksData);
});