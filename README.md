# PWA 

Komponen PWA : 
## Application Shell
    Application Shell adalah salah satu teknik dalam Progressive Web Apps untuk membuat komponen UI termuat secara instan tanpa menunggu response dari server. App Shell sejatinya hanya terdiri dari HTML, CSS dan JavaScript yang disimpan di dalam cache pada request pertama agar request selanjutnya tidak perlu mengambil dari server lagi. (App shell hanyalah sebuah teknik, bukan library ataupun framework)
## Web App Manifest
    Web App Manifest merupakan komponen penting setelah pembuatan Application Shell dalam menerapkan PWA(s). Tanpa adanya Web App Manifest, website kita tidak pernah dianggap sebagai “aplikasi” dan tidak dapat ditambahkan ke homescreen.
    
    Web App Manifest menyediakan informasi mengenai web app dalam bentuk berkas JSON. Informasi yang tertulis pada berkas tersebut digunakan untuk keperluan identitas ketika web app ditambahkan pada homescreen, seperti nama aplikasi, author, ikon, versi, deskripsi, dan sumber daya lainnya sehingga web app tampak identik dengan aplikasi native ketika ditambahkan ke homescreen handphone.
    
    Ekstensi dari berkas Web App Manifest yang direkomendasikan adalah .webmanifest. Namun, kita juga bisa membuatnya bertipe text/json.
## Service Worker
    Service Worker merupakan sebuah berkas JavaScript yang diproses oleh browser di background. Berkas ini dieksekusi secara terpisah tak seperti berkas JavaScript biasa yang membentuk website. Service Worker menjadi gerbang bagi berbagai fitur browser yang tidak memerlukan tampilan atau interaksi dengan pengguna. Kemampuan utama dari Service Worker adalah mengambil alih seluruh urusan request pada browser.

    Siklus Hidup Service Worker
    - Installation
    - Activation
    - Idle
## Cache API
     Cache API adalah tempat penyimpanan lokal yang digunakan browser untuk menyimpan resource agar dapat digunakan kembali sehingga pada pemanggilan selanjutnya tak perlu mengirim permintaan (request) lagi ke jaringan
## Fetch API
## IndexedDD
## Web Socket
## Notifications

# Workbox
## Apa Itu Workbox?
    Workbox adalah serangkaian modul yang menyederhanakan routing dan caching di service worker. Workbox bertujuan untuk membuat penggunaan service worker semudah mungkin dan memungkinkan fleksibilitas pada aplikasi yang kompleks.

    Melakukan maintenance terhadap service worker dan logika Cache Storage terkadang cukup rumit dan menantang. Dari permasalahan tersebut, kita bisa menghindarinya dengan serangkaian library open-source, yaitu workbox.

    Workbox merupakan library yang populer untuk mengimplementasikan service worker. Workbox telah digunakan oleh 32% mobile site dan beberapa framework JavaScript populer, seperti Angular, React, dan Vue.

## Cara Penggunaan Workbox dengan Webpack
    Workbox menyediakan dua build-tool untuk membuat service worker secara otomatis. Build tools tersebut di antaranya adalah generateSW dan injectManifest. generateSW sepenuhnya menyediakan service worker sekaligus proses-proses dalam melakukan caching, sedangkan injectManifest menyediakan kendali lebih leluasa terhadap service worker sehingga tingkat fleksibilitas lebih tinggi.

    Penjelasan lebih rinci mengenai generateSW dan injectManifest adalah sebagai berikut.

    generateSW: Memprioritaskan kemudahan penggunaan dan kesederhanaan, tetapi mengorbankan fleksibilitas. Namun, kita juga bisa mendefinisikan serangkaian opsi konfigurasi sehingga memberikan fungsionalitas yang penuh pada service worker. Jika kita ingin menggunakan fitur service worker yang lebih spesifik, seperti Web Push Notification, tidak disarankan menggunakan generateSW.

    injectManifest: Memiliki fleksibilitas yang lebih besar jika dibandingkan dengan generateSW. Hal tersebut karena injectManifest memerlukan berkas service worker sendiri dalam penerapannya sehingga kita perlu menuliskan logika di dalamnya. Dalam alurnya, injectManifest akan mencari self.__WB_MANIFEST di dalam berkas service worker untuk membuat daftar URL untuk disimpan dalam cache. Jika tidak, ia akan mengembalikan error ketika di-compile. injectManifest sangat cocok jika proyek yang dibangun memiliki kebutuhan routing dan caching yang kompleks serta tidak bisa dilakukan oleh generateSW.