        
        function chalaoFilter(cat, btn) {
            var bachoWaaliBtns = document.querySelectorAll('.tab-btn');
            bachoWaaliBtns.forEach(function(b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');

            var cards = document.querySelectorAll('.p-card');
            cards.forEach(function(c) {
                var myCat = c.getAttribute('data-category');

                if (cat === 'all') {
                    c.classList.remove('hide-me');
                } else if (myCat === cat) {
                    c.classList.remove('hide-me');
                } else {
                    c.classList.add('hide-me');
                }
            });
        }

        function toggleKaro(id) {
            var box = document.getElementById('box-' + id);
            
            if (box.classList.contains('is-open')) {
                box.classList.remove('is-open');
            } else {
                var allBoxes = document.querySelectorAll('.review-drawer');
                allBoxes.forEach(function(item) {
                    item.classList.remove('is-open');
                });
                box.classList.add('is-open');
            }
        }