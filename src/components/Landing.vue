<script setup>
</script>

<template class="font-sans">

  <div class="">
    <div class="w-full flex flex-col justify-center">
      <!-- nav -->
      <div class="top-0 z-10 bg-pink-50">
        <nav class="py-4 md:py-8 flex items-center justify-between max-w-[1200px] mx-auto px-4">
          <a href="https://www.mitochronhub.com" class="w-[153px] h-fit sm:w-[209px] sm:h-[31px] aspect-auto">
            <img src="../assets/logo.png" alt="" class="mix-blend-multiply" width="209" height="31" />
          </a>
          <div class="flex items-center gap-[30px] text-grey font-medium">
            <a href="#about" class="hidden md:block hover:text-primary">Learn more</a>
            <a href="#howto" class="hidden md:block hover:text-primary">How to Enter</a>
            <a  target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSe8ySxKK387Vccta8oceHc92ksz3vHflYYHSyZNfKSwU01WPA/viewform">
              <button
                class="px-4 py-3 text-sm  bg-mhpink text-white transition-all duration-200 border rounded-full bg-primary hover:text-primary hover:bg-mhpink hover:border-primary">
                Apply now
              </button>
            </a>
          </div>
        </nav>
      </div>

      <header
        class="px-4 pt-4 md:px-24 flex flex-col md:flex-row  font-sans mx-auto w-full items-center justify-between bg-pink-50">

        <div class="flex flex-col md:w-2/4">
          <h1 class="text-5xl md:text-6xl font-bold text-mhblue">
            Win <span class="text-mhpink">2.5 million</span> <br> Naira worth of <br> Seed Investment
          </h1>
          <h4 class="text-xl md:text-2xl text-mhgray font-semibold mt-3 w-9/12">
            Enter the challenge to win funding for your startup or business
          </h4>

          <div class="flex flex-row items-center mt-5 sm:mt-6 lg:mt-10">
            <div class="">
              <a  target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSe8ySxKK387Vccta8oceHc92ksz3vHflYYHSyZNfKSwU01WPA/viewform">
                <button
                  class="px-6 py-3 text-lg lg:px-8 lg:py-3 xl:py-3 rounded-full font-medium bg-mhpink text-white  lg:text-lg xl:text-lg -tracking-0.1 focus:outline-none focus:ring-2 focus:ring-accent-green">
                  Apply now
                </button>
              </a>
            </div>
            <a href="#video" class=" block ml-5 flex flex-row items-center">
              <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M16.5001 0.659668C7.38738 0.659668 0 8.04742 0 17.1589C0 26.2733 7.38738 33.6604 16.5001 33.6604C25.6126 33.6604 33 26.2733 33 17.1589C33 8.04742 25.6126 0.659668 16.5001 0.659668ZM22.2028 18.034L13.9528 23.1912C13.7859 23.2955 13.596 23.3473 13.4063 23.3473C13.2344 23.3473 13.062 23.304 12.9063 23.2175C12.5785 23.0365 12.375 22.6902 12.375 22.3169V12.0039C12.375 11.6291 12.5785 11.2835 12.9063 11.1019C13.2341 10.9188 13.6349 10.9294 13.9528 11.1295L22.2028 16.2846C22.5042 16.4741 22.6876 16.8048 22.6876 17.1589C22.6876 17.5152 22.5042 17.8466 22.2028 18.034Z"
                  fill="#ED1E79" class="inline" />
              </svg>
              <span class="font-semibold text-mhpink text-lg ml-2">Watch video</span>
            </a>
          </div>
        </div>

        <div class="">
          <img src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1670422885/mitochron/hero-img_lxqapy.png"
            alt="logo" class="mx-auto mt-8 w-3/4 md:w-full md:mt-0" />
        </div>
      </header>

      <!-- timeline section -->
      <section class="flex flex-col items-center bg-center bg-no-repeat bg-cover"
        style="background-image: url('https://res.cloudinary.com/dq6iuhnpr/image/upload/v1670510062/mitochron/wavy-bg_now0to.png')">

        <h1 class="mt-16 text-mhblue text-5xl px-4 md:mt-48 font-semibold text-center">
          <span class="text-mhpink">NGN2.5m</span> worth of seed investment <br class="hidden md:inline"> for 3
          Businesses
        </h1>

        <p class="text-mhgray mt-5 px-4 md:w-1/3 text-center">
          Show us the cool thing you’re building and tell us why your business is the best for this fund and you’re in
          :)
        </p>

        <div class="text-center mt-16">
          <img src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1670508781/mitochron/timeline_dvkneq.png"
            alt="logo" class="" />
        </div>

        <div class="mt-12">
          <a  target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSe8ySxKK387Vccta8oceHc92ksz3vHflYYHSyZNfKSwU01WPA/viewform">
            <button
              class="px-6 py-3 text-lg lg:px-8 lg:py-3 xl:py-3 rounded-full font-medium bg-mhpink text-white  lg:text-lg xl:text-lg -tracking-0.1 focus:outline-none focus:ring-2 focus:ring-accent-green">
              Apply now
            </button>
          </a>
        </div>
      </section>



      <!-- video section -->
      <section id="about" class="flex flex-col items-center bg-pink-50 mt-24 pb-8">

        <h1 class="px-4 text-mhblue text-5xl mt-8 md:mt-16 font-semibold text-center">
          Learn More about the Mitochron Hub <br> Startup Challenge
        </h1>

        <p class="text-mhgray mt-5 px-4 md:w-1/3 text-center">
          Show us the cool stuff you are building and we are ready to join with our best hands and investment
        </p>
      </section>

      <div id="video" class="bg-pink-50" style="padding:56.25% 0 0 0;position:relative;">
        <iframe
          src="https://player.vimeo.com/video/779267016?h=bc5db162fc&badge=0&autopause=0&player_id=0&app_id=58479/embed"
          allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0"
          style="position:absolute;top:0;left:0;width:100%;height:100%;">
        </iframe>
      </div>

      <div class="py-12 text-center bg-pink-50">
        <a  target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSe8ySxKK387Vccta8oceHc92ksz3vHflYYHSyZNfKSwU01WPA/viewform">
          <button
            class="px-6 py-3 text-lg lg:px-8 lg:py-3 xl:py-3 rounded-full font-medium bg-mhpink text-white  lg:text-lg xl:text-lg -tracking-0.1 focus:outline-none focus:ring-2 focus:ring-accent-green">
            Apply now
          </button>
        </a>
      </div>


      <!-- How to Enter the Challenge -->
      <div id="howto" class="bg-mhindigo py-16 xl:px-28 sm:px-16 px-8 relative pt-16">
        <div class="flex flex-col sm:flex-row sm:items-end">
          <div class="sm:w-6/12">
            <h2 class="section-title font-medium">
              <span class="text-white text-5xl">
                How to Enter <br />
                <span class="text-gray-200">the Mitochron Hub <br> Startup Challenge</span>
              </span>
            </h2>
          </div>

          <div class="mt-6 sm:mt-0 sm:w-6/12 text-white lg:text-lg">
            <p class="xl:w-9/12 w-11/12">

            </p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row">
          <div class="sm:w-6/12">
            <div class="mt-8 md:mt-20 flex items-start space-x-6 xl:w-9/12 w-11/12">
              <img src="../assets/tick.svg" alt="tick" class="mt-1" />
              <div class="text-white">
                <h3 class="font-medium text-2xl">1. Read the fine print</h3>
                <p class="mt-4 md:text-base text-">
                  Visit <a target="_blank" href="https://drive.google.com/drive/folders/1qIGJLNnc_XrJDHsInoYfIambqkgMaxg1?usp=share_link" class="underline underline-offset-2 font-medium">this link</a> to download the terms
                  and conditions
                  document. By entering this challenge you agree to
                  all the terms contained therein.
                </p>
              </div>
            </div>
            <div class="mt-10 flex items-start space-x-6 xl:w-9/12 w-11/12">
              <img src="../assets/tick.svg" alt="tick" class="mt-1" />
              <div class="text-white">
                <h3 class="font-medium text-2xl">2. Apply for the Challenge</h3>
                <p class="mt-4 md:text-base text-">
                   <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSe8ySxKK387Vccta8oceHc92ksz3vHflYYHSyZNfKSwU01WPA/viewform" class="underline underline-offset-2 font-medium">Fill this form</a> to apply. The stronger your application, the higher your
                  chances. You'll be required to create a pitch deck which you'll submit with the form. You can download the deck template <a target="_blank" class="underline" href="https://drive.google.com/drive/folders/1qIGJLNnc_XrJDHsInoYfIambqkgMaxg1?usp=share_link">here</a>. PLEASE FOLLOW THE TEMPLATE.
                </p>
              </div>
            </div>
          </div>

          <div class="sm:w-6/12">
            <div class="mt-10 sm:mt-20 flex items-start space-x-6 xl:w-9/12 w-11/12">
              <img src="../assets/tick.svg" alt="tick" class="mt-1" />
              <div class="text-white">
                <h3 class="font-medium text-2xl">3. Get Qualified</h3>
                <p class="mt-4 md:text-base text-">
                <ul class="list-disc space-y-2">
                  <li>Step 1: Record a video no longer than 2 minutes introducing yourself, what problem your business is solving and WHY you're the best fit  for this fund.</li>
                  <li>Step 2: Post the video on <span class="font-semibold">your</span> Instagram page and tag @mitochronhub_ on your video
                  </li>
                  <li>Step 3: Get up to 20 likes on the video and ensure that those who like your video also follow our <a target="_blank" class="underline" href="https://instagram.com/mitochronhub_">page</a>. This is to ensure market participation.</li>
                  <li>Step 4: Keep building as we review your application. We'll announce the 3 winning business in January 2023!</li>

                </ul>

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- FOOTER -->
      <footer class="flex flex-col pl-12 pt-4 md:pl-24 md:py-10 py-22 text-grey">
        <img src="../assets/logo.png" alt="" class="mix-blend-multiply" width="209" height="31" />
        <a href="tel:+234-701-068-0569" class="mt-4">+2347010680569</a>
        <a href="mailto:mitochronhub@gmail.com" class="mt-4">mitochronhub@gmail.com</a>
        <div class="flex gap-3 mt-6">
          <a href="https://facebook.com/mitochronhub" target="_blank" noreferrer noopener>
            <img src="../assets/facebook.svg" alt="facebook url" width="32" height="32" />
          </a>
          <a href="https://twitter.com/mitochronhub_" target="_blank" noreferrer noopener>
            <img src="../assets/twitter.svg" alt="twitter url" width="32" height="32" />
          </a>
          <a href="https://instagram.com/mitochronhub_" target="_blank" noreferrer noopener>
            <img src="../assets/instagram.svg" alt="twitter url" width="32" height="32" />
          </a>
          <a href="mailto:mitochronhub@gmail.com">
            <img src="../assets/email.svg" alt="email url" width="32" height="32" />
          </a>
        </div>
        <p class="mt-8">© 2022 Mitochron Hub</p>
      </footer>

    </div>
  </div>

</template>

<style scoped>

</style>
