<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>


<div class="fixed top-0 z-50 w-screen px-4 py-3 bg-white bg-opacity-60 border-2 border-b-white-dark">
  <div class="mx-auto max-w-7xl flex justify-between items-center">
    <div class="w-24 md:w-auto">
      <a href="/" class="text-rust-dark font-body font-bold text-sm md:text-lg">DISCOVER DROUGHTLAND</a>
    </div>
    <div class="w-auto space-x-4">
      <a href="/take-action"><button type="button" class="inline whitespace-nowrap transition-all bg-life py-1 px-3 rounded-sm text-sm font-body font-semibold text-white hover:bg-life-dark">Take action</button></a>
    </div>
  </div>
</div>


<div class="relative h-screen bg-wave-pattern bg-cover bg-white">
  <div class="h-screen z-40 absolute inset-0 object-center items-center flex justify-center w-screen">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl text-center md:text-left">
      <div class="px-4">
        <div class="mb-6">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-display text-white leading-none py-6"><span class="text-black-light">Discover</span><br/><span class="text-rust-dark">Droughtland</span></h1>
          <p class="font-body text-black-light leading-loose">Thirsty for adventure? Dare to explore the one-of-a-kind experiences of Droughtland, the country with dryness of land, but not of spirit. </p>
        </div>
          <a href="/test"><button type="button" class="inline whitespace-nowrap transition-all bg-white border-4 border-rust-dark py-1 px-3 mr-3 rounded-lg text-md font-body font-semibold text-rust-dark hover:border-rust-light hover:text-rust-light">Learn more</button></a>
          <a href="/test"><button type="button" class="inline whitespace-nowrap transition-all bg-rust-dark border-4 border-rust-dark py-1 px-3 rounded-lg text-md font-body font-semibold text-white hover:bg-rust hover:border-rust">Drought Day 2022</button></a>
      </div>
      <div class="place-content-center order-first md:order-last">
        <img src="./assets/images/droughtland-seal.svg" class="mx-auto max-w-xs md:max-w-md px-4 transition-all opacity-60 hover:opacity-100" />
      </div>
    </div>
  </div>
</div>



<div class="bg-white-dark">
  <div class="grid grid-cols-1 lg:grid-cols-2 px-4 text-white py-8 md:py-10 max-w-7xl m-auto">
    <div class="px-2">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-display text-rust-dark leading-none py-2">Life in Droughtland</h2>
      <p class="text-3xl font-body italic text-rust-darkest py-2">Do you have what it takes to experience it?!</p>
      <p class="font-body text-black-light py-2">Rich history, lost culture,  very creative dry cuisine, silence and solitude — all packed into one rainless paradise. Droughtland is a country not full of people who are resilient and welcoming, urging (more like begging) you to come visit.</p>
      <p class="font-body text-black-light py-2">In Droughtland, the old meets the new, with nostalgic reminders of how the country used to be before drought in every corner, as well as people living in unique, new ways. That makes it a "must-see" destination for curious souls, and brave (really brave!) hearts.</p>
    </div>
    <div class="aspect-w-16 aspect-h-9">
      <iframe class="" src="https://www.youtube.com/embed/GXzI9ZZgnR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</div>


<div class="bg-white px-2">
  <div class="max-w-7xl mx-auto pt-8 pb-4">
    <h2 class="uppercase font-body text-xl text-rust-dark">Top things to do in Droughtland</h2>
  </div>
  <div class="grid grid-cols-4 md:grid-cols-8 gap-4 pb-4 max-w-7xl m-auto">
    <div class="col-span-4">
      <a href="/oops" target="_blank" class="hover:opacity-80 text-black-light hover:text-rust">
        <div class="w-16 h-16 bg-rust-dark rounded-xl overflow-hidden relative py-3">
          <div class="absolute bg-white py-1 px-2 top-3 left-3 text-life rounded-md text-xs flex inline-flex z-40">
            <span class="bg-life rounded-full w-3 h-3 mr-1">&nbsp;</span>
            <p>Limited Availability</p>
          </div>
          <img src="./assets/images/tour-1.jpg" class="scale-125 hover:scale-150 hover:opacity-70 transition-all z-0" />
        </div>
        <p class="pt-2 text-[12px] md:text-sm">Try out our avant-garde cuisine at the restaurant Dry Delights!</p>
      </a>
    </div>


    <div class="col-span-2">
      <a href="/oops" target="_blank" class="hover:opacity-80 font-body text-black-light hover:text-rust">
        <div class="w-16 h-14 bg-rust-dark rounded-xl overflow-hidden relative">
          <div class="absolute bg-white py-1 px-2 top-3 left-3 text-rust-dark rounded-md text-xs flex inline-flex z-40">
            <span class="bg-rust-dark rounded-full w-3 h-3 mr-1">&nbsp;</span>
            <p>Sold out</p>
          </div>
          <img src="./assets/images/tour-2.jpg" class="scale-100 hover:scale-125 hover:opacity-70 transition-all z-0" />
        </div>
        <p class="py-2 text-[12px] md:text-sm">The Great Barren Gardens</p>
      </a>

      <a href="/oops" target="_blank" class="hover:opacity-80 font-body text-black-light hover:text-rust">
        <div class="w-16 h-14 bg-rust-darkest rounded-xl overflow-hidden relative">
          <div class="absolute bg-white py-1 px-2 top-3 left-3 text-rust-darkest rounded-md text-xs flex inline-flex z-40">
            <span class="bg-rust-darkest rounded-full w-3 h-3 mr-1">&nbsp;</span>
            <p>Cancelled</p>
          </div>
          <img src="./assets/images/tour-4.jpg" class="scale-100 hover:scale-125 hover:opacity-70 transition-all z-0" />
        </div>
        <p class="py-2 text-[12px] md:text-sm">Thirsty Brewery</p>
      </a>
    </div>


    <div class="col-span-2">
      <a href="/oops" target="_blank" class="hover:opacity-80 font-body text-black-light hover:text-rust">
        <div class="w-16 h-14 bg-rust-dark rounded-xl overflow-hidden relative">
          <div class="absolute bg-white py-1 px-2 top-3 left-3 text-rust-dark rounded-md text-xs flex inline-flex z-40">
            <span class="bg-rust-dark rounded-full w-3 h-3 mr-1">&nbsp;</span>
            <p>Sold out</p>
          </div>
          <img src="./assets/images/tour-3.jpg" class="scale-100 hover:scale-125 hover:opacity-70 transition-all z-0" />
        </div>
        <p class="py-2 text-[12px] md:text-sm">Waterless water park</p>
      </a>

      <a href="/oops" target="_blank" class="hover:opacity-80 font-body text-black-light hover:text-rust">
        <div class="w-16 h-14 bg-rust-darkest rounded-xl overflow-hidden relative">
          <div class="absolute bg-white py-1 px-2 top-3 left-3 text-rust-darkest rounded-md text-xs flex inline-flex z-40">
            <span class="bg-rust-darkest rounded-full w-3 h-3 mr-1">&nbsp;</span>
            <p>Cancelled</p>
          </div>
          <img src="./assets/images/tour-5.jpg" class="scale-100 hover:scale-125 hover:opacity-70 transition-all z-0" />
        </div>
        <p class="py-2 text-[12px] md:text-sm">The Rainless Forest</p>
      </a>
    </div>
  </div>
  <div class="max-w-7xl mx-auto text-right pb-8">
    <div class="relative h-4">
      <div class="absolute -top-1 w-full border-b-[1px] border-b-rust-light z-0">&nbsp;</div>
        <a href="/oops" target="_blank" class="relative text-rust-dark font-display text-lg bg-white z-40 px-4 hover:text-black-light transition-all">View more</a>
    </div>
  </div>
</div>


<div class="bg-rust-darkest">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 text-white py-8 md:py-10 max-w-7xl m-auto">
    <div class="px-2">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-display text-rust-lightest leading-none pb-4">A unique introvert visa program for foreigners</h2>
      <p class="font-body text-rust-lightest py-2">Don’t like people, or feel drained after social gatherings? We feel you. In Droughtland, there’s not many people left, making it a really quiet and deserted place — all perfect elements for introverts.</p>
      <p class="font-body text-rust-lightest py-2">That’s why our government launched a special visa program for foreign introverts. Be the first to apply!</p>
      <a href="/test"><button type="button" class="inline whitespace-nowrap transition-all bg-white-dark border-4 border-white-dark py-1 px-3 mr-3 mt-4 rounded-lg text-md font-body font-semibold text-rust-dark hover:border-rust-lightest hover:bg-rust-lightest hover:text-black-light">Apply now</button></a>
    </div>
    <div class="">
      <a href="/oops">
        <img src="./assets/images/droughtland-postcard.png" class="mx-auto max-w-full px-4 transition-all opacity-80 hover:scale-125" />
      </a>
    </div>
  </div>
</div>


<div class="bg-white-dark py-10">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 text-white max-w-7xl m-auto">
    <div class="px-2">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-display text-rust-dark leading-none py-2">Droughtland for kids</h2>
      <p class="text-3xl font-body italic text-rust-darkest py-2">Life is very different when you are a kid</p>
      <p class="font-body text-black-light py-2">In the World’s Happines Index, Droughtland appeared as number one in the ranking within the children population (although it wasn’t exactly the same case for adults, but we can’t win al of it, right?).</p>
      <p class="font-body text-black-light py-2">Come with your children! They will love it!</p>
    </div>
    <div class="">
      <div class="carousel w-full h-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full"> /
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full"> /
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a>
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full"> /
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a>
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full"> /
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">❮</a>
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="max-w-7xl mx-auto text-right pt-8">
    <div class="relative h-4">
      <div class="absolute -top-1 w-full border-b-[1px] border-b-rust-light z-0">&nbsp;</div>
        <a href="/oops" target="_blank" class="relative text-rust-dark font-display text-lg bg-white-dark z-40 px-4 hover:text-black-light transition-all">View more</a>
    </div>
  </div>
</div>


<div class="relative bg-wave-pattern bg-cover bg-white text-center py-8">
  <div class="">
    <h1 class="font-display text-white leading-none py-6"><span class="text-black-light text-3xl md:text-4xl lg:text-5xl">Desertification and Drought</span><br/><span class="text-rust-dark text-5xl md:text-6xl lg:text-7xl ">Day 2022</span></h1>
    <p class="text-3xl font-body italic text-rust-darkest py-2">Plan your Drought Day Activities</p>
  </div>
  <div class="pt-6">
    <a href="/test"><button type="button" class="inline whitespace-nowrap transition-all bg-rust-dark border-4 border-rust-dark py-1 px-3 rounded-lg text-md font-body font-semibold text-white hover:bg-rust hover:border-rust">Learn more</button></a>
  </div>
</div>

<div class="py-6 bg-black-light">
  <div class="max-w-7xl m-auto flex justify-between items-center pb-2 border-b-[1px] border-b-black">
    <p class="font-body font-bold text-rust-dark">Connect with us</p>
  </div>
  <div class="max-w-7xl m-auto flex items-center pt-4 font-display gap-4 text-3xl transition-all">
    <a href="" class="hover:text-rust text-white-dark transition-all">Facebook</a>
    <a href="" class="hover:text-rust text-white-dark transition-all">Twitter</a>
    <a href="" class="hover:text-rust text-white-dark transition-all">Instagram</a>
    <a href="" class="hover:text-rust text-white-dark transition-all">Youtube</a>
  </div>
</div>

<footer class="py-4 bg-black">
  <div class="max-w-7xl m-auto flex justify-between items-center">
    <a href="" class="font-display text-white leading-none"><span class="text-white-dark text-sm md:text-md lg:text-lg ">Discover</span><br/><span class="text-rust-dark text-lg md:text-xl lg:text-2xl ">Droughtland</span></a>
    <div class="w-auto space-x-4">
      <a href="/take-action" class="inline transition-all text-sm font-body text-rust hover:text-rust-lightest">About this website</a>
      <a href="/take-action" class="inline transition-all text-sm font-body text-rust hover:text-rust-lightest">Take action</a>
      <a href="/take-action" class="inline transition-all text-sm font-body text-rust hover:text-rust-lightest">Copyright</a>
    </div>
  </div>

</footer>


</template>

<style>

</style>
