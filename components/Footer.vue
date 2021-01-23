<template>
  <footer class="bg-gray-50 mt-8 p-8 md:px-12 md:py-8">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-16">
      <div>
        <h3 class="text-primary mb-2 md:mb-4 app-name font-semibold">
          popaket
        </h3>
        <p class="text-gray-800">Paket in your pocket.</p>
        <p class="mb-2 text-gray-800">Barang apa aja, kirimnya pake popaket.</p>
        <div class="flex">
          <a href="#">
            <img
              src="../static/social-medias/instagram.svg"
              alt=" Social Media Instagram"
            />
          </a>
          <a href="#">
            <img
              src="../static/social-medias/twitter.svg"
              alt=" Social Media Twitter"
            />
          </a>
          <a href="#">
            <img
              src="../static/social-medias/youtube.svg"
              alt=" Social Media Youtube"
            />
          </a>
        </div>
      </div>
      <div>
        <a href="#" class="font-semibold text-gray-800 block mb-2"
          >Tentang Kami</a
        >
        <a href="#" class="font-semibold text-gray-800 block mb-2">Bantuan</a>
        <a href="#" class="font-semibold text-gray-800 block mb-2"
          >Kebijakan Privasi</a
        >
        <a href="#" class="font-semibold text-gray-800 block mb-2"
          >Syarat & Ketentuan</a
        >
      </div>
      <div>
        <p class="font-semibold text-gray-800 mb-2">Pembayaran dengan kami</p>
        <div class="grid sm:grid-cols-5 grid-cols-1 lg:grid-cols-3">
          <img
            src="../static/banks/bca.svg"
            class="mb-2 lg:mb-0 h-6"
            alt=" Bank BCA"
          />
          <img
            src="../static/banks/mandiri.svg"
            class="mb-2 lg:mb-0 h-6"
            alt=" Bank Mandiri"
          />
          <img
            src="../static/banks/ocbc.svg"
            class="mb-2 lg:mb-0 h-6"
            alt=" Bank OCBC"
          />
        </div>
      </div>
      <div class="hidden lg:inline-block md:mb-0 mb-4"></div>
    </div>
    <div class="text-center text-gray-400 font-medium">
      &#169; {{ currentYear }} popaket
    </div>
  </footer>
</template>
