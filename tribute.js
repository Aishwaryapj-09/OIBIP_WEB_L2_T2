 document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                let targetId = this.getAttribute('data-target');
                document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
                document.getElementById(targetId).classList.add('active');
            });
        });
        function openmodal(title, text) {
            document.getElementById("title").innerHTML = title;
            document.getElementById("con").innerHTML = text;
            document.querySelector('.abcd').style.display = "block";
        }
        function closeModal() {
            document.querySelector('.abcd').style.display = "none";
        }