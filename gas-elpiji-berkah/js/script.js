/* =====================================================
   GAS ELPJI BERKAH - JavaScript tambahan
   Menu responsif, katalog dinamis, dan validasi formulir.
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {
    // Tahun pada footer mengikuti tahun perangkat.
    document.querySelectorAll('.current-year').forEach(function (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    });

    // 1. Menu hamburger untuk layar kecil.
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function () {
            const isOpen = mainNav.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
            navToggle.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
        });
    }

    // 2. Katalog: data produk berupa array objek dan dirender ke halaman.
    const catalogGrid = document.querySelector('#catalog-grid');
    const searchInput = document.querySelector('#catalog-search');
    const categoryFilter = document.querySelector('#category-filter');
    const catalogCount = document.querySelector('#catalog-count');
    const emptyState = document.querySelector('#empty-state');

    const products = [
        {
            name: 'LPG 3 Kg',
            category: 'tabung',
            categoryLabel: 'Tabung LPG',
            description: 'Pilihan LPG ukuran 3 kg. Penyaluran mengikuti ketentuan yang berlaku di wilayah setempat.',
            price: 'Harga: konfirmasi langsung',
            image: 'img/lpg-3kg.svg',
            alt: 'Ilustrasi tabung LPG ukuran 3 kilogram'
        },
        {
            name: 'LPG 5,5 Kg',
            category: 'tabung',
            categoryLabel: 'Tabung LPG',
            description: 'Pilihan LPG non-subsidi ukuran 5,5 kg untuk kebutuhan rumah tangga.',
            price: 'Harga: konfirmasi langsung',
            image: 'img/lpg-55kg.svg',
            alt: 'Ilustrasi tabung LPG ukuran 5,5 kilogram'
        },
        {
            name: 'LPG 12 Kg',
            category: 'tabung',
            categoryLabel: 'Tabung LPG',
            description: 'Pilihan LPG non-subsidi ukuran 12 kg untuk rumah tangga dan usaha.',
            price: 'Harga: konfirmasi langsung',
            image: 'img/lpg-12kg.svg',
            alt: 'Ilustrasi tabung LPG ukuran 12 kilogram'
        },
        {
            name: 'Bright Gas 5,5 Kg',
            category: 'tabung',
            categoryLabel: 'Tabung LPG',
            description: 'Pilihan Bright Gas ukuran 5,5 kg. Tanyakan ketersediaan warna dan jenis tabung.',
            price: 'Harga: konfirmasi langsung',
            image: 'img/bright-55kg.svg',
            alt: 'Ilustrasi tabung Bright Gas ukuran 5,5 kilogram'
        },
        {
            name: 'Bright Gas 12 Kg',
            category: 'tabung',
            categoryLabel: 'Tabung LPG',
            description: 'Pilihan Bright Gas ukuran 12 kg untuk kebutuhan rumah tangga atau usaha.',
            price: 'Harga: konfirmasi langsung',
            image: 'img/bright-12kg.svg',
            alt: 'Ilustrasi tabung Bright Gas ukuran 12 kilogram'
        },
        {
            name: 'Layanan Pengantaran',
            category: 'layanan',
            categoryLabel: 'Layanan',
            description: 'Tanyakan apakah alamat pelanggan termasuk dalam jangkauan pengantaran.',
            price: 'Biaya: konfirmasi langsung',
            image: 'img/delivery.svg',
            alt: 'Ilustrasi kendaraan layanan pengantaran tabung gas'
        }
    ];

    function renderProducts() {
        if (!catalogGrid || !searchInput || !categoryFilter) {
            return;
        }

        const searchText = searchInput.value.trim().toLocaleLowerCase('id');
        const selectedCategory = categoryFilter.value;
        const filteredProducts = products.filter(function (product) {
            const matchesName = product.name.toLocaleLowerCase('id').includes(searchText);
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            return matchesName && matchesCategory;
        });

        catalogGrid.innerHTML = filteredProducts.map(function (product) {
            return `
                <article class="product-card">
                    <img src="${product.image}" alt="${product.alt}" width="240" height="190" loading="lazy">
                    <div class="product-card-body">
                        <span class="product-tag">${product.categoryLabel}</span>
                        <h2>${product.name}</h2>
                        <p>${product.description}</p>
                        <p class="product-price">${product.price}</p>
                        <a class="text-link" href="kontak.html">Tanyakan produk <span aria-hidden="true">→</span></a>
                    </div>
                </article>`;
        }).join('');

        if (catalogCount) {
            catalogCount.textContent = 'Menampilkan ' + filteredProducts.length + ' dari ' + products.length + ' item.';
        }
        if (emptyState) {
            emptyState.hidden = filteredProducts.length !== 0;
        }
    }

    if (catalogGrid && searchInput && categoryFilter) {
        renderProducts();
        searchInput.addEventListener('input', renderProducts);
        categoryFilter.addEventListener('change', renderProducts);
    }

    // 3. Validasi tambahan formulir dan pesan kesalahan di bawah kolom.
    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {
        const feedback = document.querySelector('#form-feedback');
        const fields = Array.from(contactForm.querySelectorAll('input, select, textarea'));

        function getErrorMessage(field) {
            if (field.validity.valueMissing) {
                return 'Kolom ini wajib diisi.';
            }
            if (field.validity.typeMismatch && field.type === 'email') {
                return 'Masukkan alamat email dengan format yang benar.';
            }
            if (field.validity.patternMismatch) {
                return 'Nomor HP harus terdiri dari 10 sampai 13 digit angka.';
            }
            if (field.validity.tooShort) {
                return 'Isian masih terlalu singkat.';
            }
            if (field.validity.tooLong) {
                return 'Isian melebihi batas karakter.';
            }
            return '';
        }

        function showFieldError(field) {
            const errorElement = document.querySelector('#' + field.id + '-error');
            const message = getErrorMessage(field);
            if (errorElement) {
                errorElement.textContent = message;
            }
            field.setAttribute('aria-invalid', String(Boolean(message)));
            return message;
        }

        fields.forEach(function (field) {
            field.addEventListener('invalid', function () {
                showFieldError(field);
            });
            field.addEventListener('input', function () {
                showFieldError(field);
                if (feedback) {
                    feedback.textContent = '';
                    feedback.className = 'form-feedback';
                }
            });
            field.addEventListener('change', function () {
                showFieldError(field);
            });
        });

        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let formIsValid = true;

            fields.forEach(function (field) {
                const errorMessage = showFieldError(field);
                if (errorMessage) {
                    formIsValid = false;
                }
            });

            if (!formIsValid || !contactForm.checkValidity()) {
                if (feedback) {
                    feedback.textContent = 'Periksa kembali kolom yang belum benar.';
                    feedback.className = 'form-feedback error';
                }
                const firstInvalidField = fields.find(function (field) {
                    return !field.checkValidity();
                });
                if (firstInvalidField) {
                    firstInvalidField.focus();
                }
                return;
            }

            if (feedback) {
                feedback.textContent = 'Terima kasih. Data formulir berhasil diperiksa pada demo ini, tetapi belum dikirim ke server.';
                feedback.className = 'form-feedback success';
            }
            contactForm.reset();
            fields.forEach(function (field) {
                const errorElement = document.querySelector('#' + field.id + '-error');
                if (errorElement) {
                    errorElement.textContent = '';
                }
                field.removeAttribute('aria-invalid');
            });
        });
    }
});
