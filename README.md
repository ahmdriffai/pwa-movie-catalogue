# PWA 

Komponen PWA : 
## Application Shell
    - Application Shell adalah salah satu teknik dalam Progressive Web Apps untuk membuat komponen UI termuat secara instan tanpa menunggu response dari server. App Shell sejatinya hanya terdiri dari HTML, CSS dan JavaScript yang disimpan di dalam cache pada request pertama agar request selanjutnya tidak perlu mengambil dari server lagi. (App shell hanyalah sebuah teknik, bukan library ataupun framework)
## Web App Manifest
    - Web App Manifest merupakan komponen penting setelah pembuatan Application Shell dalam menerapkan PWA(s). Tanpa adanya Web App Manifest, website kita tidak pernah dianggap sebagai “aplikasi” dan tidak dapat ditambahkan ke homescreen.
    - Web App Manifest menyediakan informasi mengenai web app dalam bentuk berkas JSON. Informasi yang tertulis pada berkas tersebut digunakan untuk keperluan identitas ketika web app ditambahkan pada homescreen, seperti nama aplikasi, author, ikon, versi, deskripsi, dan sumber daya lainnya sehingga web app tampak identik dengan aplikasi native ketika ditambahkan ke homescreen handphone.
    -Ekstensi dari berkas Web App Manifest yang direkomendasikan adalah .webmanifest. Namun, kita juga bisa membuatnya bertipe text/json.
## Service Worker
## Cache API
## Fetch API
## IndexedDD
## Web Socket
## Notifications