<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>


<div class="fixed top-0 z-40 w-screen px-4 py-3 bg-navy-dark bg-opacity-90">
  <div class="mx-auto max-w-7xl flex justify-between items-center">
    <div class="w-24 md:w-auto">
      <img src="./assets/images/logo-cygnus.svg" class="h-4 sm:h-5" />
    </div>
    <div class="">
      <button type="button" class="whitespace-nowrap transition-all bg-red py-2 px-2 rounded-sm text-xs font-body font-semibold uppercase text-navy hover:bg-opacity-90">Get in touch</button>
    </div>
  </div>
</div>


<div class="relative">
  <div class="h-screen z-40 absolute inset-0">
    <div class="grid grid-cols-1 md:grid-cols-4 px-4 h-full max-w-screen-xl m-auto items-center">
      <div class="col-span-3">
          <h1 class="text-3xl md:text-5xl font-black text-white leading-tight py-6">Transforming how organizations <span class="text-red">track</span> and <span class="text-red">communicate</span> progress in meeting their <span class="text-red">sustainability commitments</span>.</h1>
          <img src="./assets/images/logo-cygnus-host.svg" class="h-6 md:h-8" />
      </div>
    </div>
  </div>
  <div class="z-30 absolute inset-0 h-screen w-9/12 overflow-hidden bg-navy-dark bg-opacity-50">
    &nbsp;
  </div>
  <div class="z-20 absolute inset-0 h-screen w-6/12 overflow-hidden bg-navy">
    &nbsp;
  </div>
  <div class="z-10 absolute inset-0 h-screen overflow-hidden">
    <img src="./assets/images/sean-pollock-PhYq704ffdA-unsplash.jpg" />
  </div>
</div>

<div class="bg-navy-dark h-screen items-center">
  <div class="grid grid-cols-1 md:grid-cols-4 px-4 text-white py-6 md:py-8 max-w-screen-xl m-auto">
    <div class="col-span-2">
      <div class="block bg-gray h-0.5 w-8 mb-4">&nbsp;</div>
      <h2 class="uppercase font-body text-gray tracking-wider pb-4">Why ESG matters</h2>
      <h3 class="text-3xl md:text-5xl font-black text-navy-light leading-tight pb-6">By knowing <span class="text-white">what to measure</span>, <span class="text-white">how to measure it</span> and <span class="text-white">how to tell your story</span>, you can realize better results and <span class="text-red">greater impact</span>.</h3>
    </div>
    <div class="col-span-2 flex items-center md:pl-6">
      <ul class="list-disc list-outside text-l md:text-xl font-body text-navy-light pl-3">
        <li class="pb-2">When it comes to sustainability, we live in an era of performance, transparency, and accountability.</li>
        <li class="pb-2">More conscious investors demand evidence of impact and reject greenwashing.</li>
        <li class="pb-2">Getting ESG right is as important to the bottom line as traditional financial indicators: ignore it and you will be left behind.</li>
        <li class="pb-2">Meeting standards is not only good for business, but increasingly mandatory.</li>
      </ul>
    </div>
  </div>
</div>


<div class="bg-white">
  <div class="grid grid-cols-1 md:grid-cols-4 px-4 text-navy-dark py-6 md:py-8 max-w-screen-xl m-auto">
    <div class="col-span-2">
      <div class="block bg-gray h-0.5 w-8 mb-4">&nbsp;</div>
      <h2 class="uppercase font-body text-navy-light tracking-wider pb-6">Competitors</h2>
      <img src="./assets/images/competitors.svg" class="w-auto" />
    </div>
    <div class="col-span-2 flex items-center md:pl-6">
      <div>
        <h3 class="text-3xl md:text-5xl font-black text-navy leading-tight py-3">We provide a unique <span class="text-red">end-to-end</span> service.</h3>
        <p class="list-disc list-outside text-l font-body text-navy-light py-3">The growth in focus on ESG has led to the emergence of many products across advisory, data tracking, and communications: however, none of the offers combine all three services.</p>
        <p class="list-disc list-outside text-l font-body text-navy-light py-3">In contrast, we offer an end-to-end service that provides ESG strategic advisory, data platform development and management, data collection and analysis, and support in engagement through storytelling. </p>
      </div>
    </div>
  </div>
</div>


<div class="bg-navy-dark px-4 text-white py-6 md:py-8">
  <div class="max-w-screen-xl m-auto">
    <div class="block bg-gray h-0.5 w-8 mb-4">&nbsp;</div>
    <h2 class="uppercase font-body text-gray tracking-wider pb-4">Product Offer</h2>
    <h3 class="text-3xl md:text-5xl  font-black text-navy-light leading-tight pb-6">Three core products make up our <span class="text-red">end-to-end</span> solution.</h3>
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div class="col-span-1 md:mr-5">
        <img src="./assets/images/icon.svg" class="py-6" />
        <h4 class="uppercase font-body font-black text-red text-l pb-2">Strategy</h4>
        <h5 class="font-body font-black text-white text-2xl leading-tight pb-5">Analyze and define how to collect the correct ESG data.</h5>
        <p class="text-navy-light pb-3">Reviewing sustainability strategies AND/OR determining what to track and how to track it. In the future, partnering with academic institutions to collect research-grade data to get proven guidance on what data is needed to inform better ESG strategies overtime.</p>
        <ul class="list-disc list-outside pl-4">
          <li class="text-navy-light pb-3">Support to define your ESG goals, needs, indicators, and requirements.</li>
          <li class="text-navy-light pb-3">Help interpreting and understanding your ESG data through our platform.</li>
        </ul>
      </div>
      <div class="col-span-1 md:mr-5">
        <img src="./assets/images/icon.svg" class="py-6" />
        <h4 class="uppercase font-body font-black text-yellow text-l pb-2">Data System</h4>
        <h5 class="font-body font-black text-white text-2xl leading-tight pb-5">Collect, validate store, analyze and visualize ESG data.</h5>
        <p class="text-navy-light pb-3">Collecting data through a variety of modern tools.</p>
        <ul class="list-disc list-outside pl-4">
          <li class="text-navy-light pb-3">Organizing, cataloguing and storing data in a secure and consistent way using our data strategy and management experience and anonymize data and metrics for future benchmarking opportunities.</li>
          <li class="text-navy-light pb-3">Visualizing data to allow for ongoing progress tracking, across metrics and time, towards individual- and portfolio-level ESG goals.</li>
        </ul>
      </div>
      <div class="col-span-1">
        <img src="./assets/images/icon.svg" class="py-6" />
        <h4 class="uppercase font-body font-black text-blue text-l pb-2">Strategy</h4>
        <h5 class="font-body font-black text-white text-2xl leading-tight pb-5">Tell ESG data stories to drive brand affinity and growth. </h5>
        <p class="text-navy-light pb-3">Supporting the creation of ESG stories that accurately and holistically represent an organization’s commitment and impact.</p>
        <ul class="list-disc list-outside pl-4">
          <li class="text-navy-light pb-3">Reviewing and aligning brand with ESG strategy to ensure efforts are perceived as authentic and credible, not opportunistic. </li>
          <li class="text-navy-light pb-3">Developing a proactive Proactive ESG communications campaign. </li>
          <li class="text-navy-light pb-3">Creating visually and engaging content to report ESG results to stakeholders. </li>
          <li class="text-navy-light pb-3">Confirm messaging with ESG academic experts to ensure accurate representation of impact and avoid greenwashing. </li>
        </ul>
      </div>
    </div>
  </div>
</div>


<div class="bg-navy-light px-4 text-white py-6 md:py-8">
  <div class="max-w-4xl m-auto">
    <div class="block bg-gray h-0.5 w-8 mb-4">&nbsp;</div>
    <h2 class="uppercase font-body text-gray tracking-wider pb-4">Impact</h2>
    <h3 class="text-3xl md:text-5xl font-black text-white leading-tight pb-6">This end-to-end ESG solution will allow you to realize <span class="text-red">better results</span> and <span class="text-red">greater impact</span>.</h3>
    <ul class="list-disc list-outside text-l md:text-xl font-body text-white pl-3">
      <li class="pb-2">Meet the market’s expectations of ESG performance and transparency.</li>
      <li class="pb-2">Increase efficiency in monitoring, tracking and reporting ESG data. </li>
      <li class="pb-2">Have the necessary data to inform decisions and investments to improve institutional ESG performance.</li>
      <li class="pb-2">Improve engagement and build lasting credibility.</li>
      <li class="pb-2">Improve financial performance. </li>
    </ul>
  </div>
</div>


<div class="bg-white">
  <div class="grid grid-cols-1 md:grid-cols-4 px-4 text-navy py-6 md:py-8 max-w-screen-xl m-auto">
    <div class="col-span-2 mb-4">
      <div class="block bg-gray h-0.5 w-8 mb-4">&nbsp;</div>
      <h2 class="uppercase font-body text-navy-light tracking-wider pb-4">Our client base</h2>
      <h3 class="text-4xl md:text-5xl font-black text-navy leading-tight pb-6 pr-6">We have a proven track record advising some of the world’s leading <span class="text-red">impact-driven</span> institutions.</h3>
      <a href="https://host-creative.com/work/" target="_blank"><button type="button" class="whitespace-nowrap transition-all bg-red py-2 px-2 rounded-sm text-xs font-body font-semibold uppercase text-navy hover:bg-opacity-90">Learn more about our work</button></a>
    </div>
    <div class="col-span-2">

    <div class="block bg-gray h-0.5 w-6 mb-3">&nbsp;</div>
    <h4 class="uppercase font-body text-navy tracking-wider pb-4">International Financial Institutions</h4>
      <div class="grid grid-cols-3 gap-6 pb-5 items-center place-items-center">
        <img src="./assets/logos/logo-wbg-positive.svg" class="max-w-auto max-h-6" />
        <img src="./assets/logos/logo-ifc-positive.svg" class="max-w-auto max-h-6" />
        <img src="./assets/logos/logo-idb-positive.svg" class="max-w-auto max-h-6" />
      </div>
      <div class="block bg-gray h-0.5 w-6 mb-3">&nbsp;</div>
      <h4 class="uppercase font-body text-navy tracking-wider pb-4">United Nations</h4>
      <div class="grid grid-cols-3 gap-6 pb-5 items-center place-items-center">
        <img src="./assets/logos/logo-unfccc-positive.svg" class="max-w-auto max-h-6" />
        <img src="./assets/logos/logo-unops-positive.svg" class="max-w-auto max-h-6" />
        <img src="./assets/logos/logo-unicef-positive.svg" class="max-w-auto max-h-6" />
      </div>
      <div class="block bg-gray h-0.5 w-6 mb-3">&nbsp;</div>
      <h4 class="uppercase font-body text-navy tracking-wider pb-4">Government Agencies</h4>
      <div class="grid grid-cols-3 gap-6 pb-5 items-center place-items-center">
        <img src="./assets/logos/logo-eu-positive.svg" class="max-w-auto max-h-6" />
        <img src="./assets/logos/logo-usaid-positive.svg" class="max-w-auto max-h-6" />
        <img src="./assets/logos/logo-cdc-positive.svg" class="max-w-auto max-h-6" />
      </div>
      <div class="block bg-gray h-0.5 w-6 mb-3">&nbsp;</div>
      <h4 class="uppercase font-body text-navy tracking-wider pb-2">Private Sector / Foundations</h4>
      <div class="grid grid-cols-3 gap-6 pb-5 items-center place-items-center">
        <img src="./assets/logos/logo-cgap-mcf-positive.svg" class="max-w-auto max-h-6" />
        <img src="./assets/logos/logo-rmicwr-positive.png" class="max-w-auto max-h-8" />
        <img src="./assets/logos/logo-secondmuse-positive.png" class="max-w-auto max-h-6" />
      </div>
    </div>
  </div>
</div>


<div class="bg-navy px-4 text-navy py-6 md:py-8">
  <div class="max-w-screen-xl m-auto">
    <div class="pb-6">
      <div class="block bg-gray h-0.5 w-8 mb-4">&nbsp;</div>
      <h2 class="uppercase font-body text-gray tracking-wider pb-4">Project Experience</h2>
    </div>

    <div class="grid auto-flow-col grid-cols-1 md:grid-cols-3 md:gap-x-6 gap-y-6">
      <div class="col-span-1 flex flex-col">
        <div class="block bg-red h-0.5 w-8 my-4">&nbsp;</div>
        <img src="#" class="block w-auto h-9 bg-gray" />
        <div class="p-2 bg-white flex flex-wrap">
          <h3 class="font-body font-black text-red uppercase text-xs pb-4">International Finance Corporation</h3>
          <h4 class="font-body font-black text-navy text-xl leading-5">Developing IFC’s Performance Standards training strategy: building global capacity for ESG.</h4>
        </div>
      </div>
      <div class="col-span-1 flex flex-col">
        <div class="block bg-red h-0.5 w-8 my-4">&nbsp;</div>
        <img src="#" class="block w-auto h-9 bg-gray" />
        <div class="p-2 bg-white flex flex-wrap">
          <h3 class="font-body font-black text-red uppercase text-xs pb-4">Education.org</h3>
          <h4 class="font-body font-black text-navy text-xl leading-5">Designing a knowledge bridge platform to empower education policy makers through better evidence and data.</h4>
        </div>
      </div>
      <div class="col-span-1 flex flex-col">
        <div class="block bg-red h-0.5 w-8 my-4">&nbsp;</div>
        <img src="#" class="block w-auto h-9 bg-gray" />
        <div class="p-2 bg-white flex flex-wrap">
          <h3 class="font-body font-black text-red uppercase text-xs pb-4">World Bank Group</h3>
          <h4 class="font-body font-black text-navy text-xl leading-5">Rethinking knowledge management for PPPs: a modern, digital approach to knowledge sharing and creation.</h4>
        </div>
      </div>
    </div>
    <div class="grid auto-flow-col grid-cols-1 md:grid-cols-3 md:gap-x-6 gap-y-6">
      <div class="col-span-1 flex flex-col">
        <div class="block bg-red h-0.5 w-8 my-4">&nbsp;</div>
        <img src="#" class="block w-auto h-9 bg-gray" />
        <div class="p-2 bg-white flex flex-wrap">
          <h3 class="font-body font-black text-red uppercase text-xs pb-4">International Finance Corporation</h3>
          <h4 class="font-body font-black text-navy text-xl leading-5">Developing IFC’s Performance Standards training strategy: building global capacity for ESG.</h4>
        </div>
      </div>
      <div class="col-span-1 flex flex-col">
        <div class="block bg-red h-0.5 w-8 my-4">&nbsp;</div>
        <img src="#" class="block w-auto h-9 bg-gray" />
        <div class="p-2 bg-white flex flex-wrap">
          <h3 class="font-body font-black text-red uppercase text-xs pb-4">Education.org</h3>
          <h4 class="font-body font-black text-navy text-xl leading-5">Designing a knowledge bridge platform to empower education policy makers through better evidence and data.</h4>
        </div>
      </div>
      <div class="col-span-1 flex flex-col">
        <div class="block bg-red h-0.5 w-8 my-4">&nbsp;</div>
        <img src="#" class="block w-auto h-9 bg-gray" />
        <div class="p-2 bg-white flex flex-wrap">
          <h3 class="font-body font-black text-red uppercase text-xs pb-4">World Bank Group</h3>
          <h4 class="font-body font-black text-navy text-xl leading-5">Rethinking knowledge management for PPPs: a modern, digital approach to knowledge sharing and creation.</h4>
        </div>
      </div>
    </div>
  </div>
</div>



<div class="bg-navy-dark px-4 text-white py-6 md:py-8">
  <div class="max-w-screen-xl m-auto">
    <div class="pb-6">
      <div class="block bg-gray h-0.5 w-8 mb-4">&nbsp;</div>
      <h2 class="uppercase font-body text-gray tracking-wider pb-4">Our Products</h2>
      <h3 class="text-3xl md:text-5xl font-black text-navy-light leading-tight pb-3">Better data and for decisions, supported by our own <span class="text-white">digital innovations</span>.</h3>
      <p class="text-xl font-body text-navy-light py-3">We have developed our own digital products to empower decision makers through better data.<br />We’re bringing this experience of developing data platforms to Høst: Cygnus.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-7 mb-8">
      <div class="col-span-2">
        <div class="block bg-red h-0.5 w-8 mb-4">&nbsp;</div>
        <h3 class="text-2xl md:text-3xl font-black text-gray-light leading-tight pb-3 mr-4">Magpie: Mobile based data collection</h3>
      </div>
      <div class="col-span-2 min-h-full bg-gray overflow-hidden">
        <img src="./assets/images/magpie.png" class="w-full" />
      </div>
      <div class="col-span-3 min-h-full bg-white p-4">
        <h4 class="text-xl md:text-2xl font-black text-navy leading-tight pb-3">Remote patient symptom monitoring </h4>
        <p class="text-navy pb-6 font-body">A free mobile and web application to easily track patient-generated health data through validated physical and psychosocial measures. The data can be integrated into clinical care and research. </p>
        <a href="https://host-creative.com" target="_blank"><button type="button" class="whitespace-nowrap transition-all bg-red py-2 px-2 rounded-sm text-xs font-body font-semibold uppercase text-navy hover:bg-opacity-90">Learn more</button></a>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-7 mb-8">
      <div class="col-span-2 pb-6 md:order-3">
        <div class="block bg-red h-0.5 w-8 mb-4">&nbsp;</div>
        <h3 class="text-2xl md:text-3xl font-black text-gray-light leading-tight pb-3">Starling: Remote low-bandwidth data collection hardware</h3>
      </div>
      <div class="col-span-2 min-h-full bg-gray overflow-hidden">
        <img src="./assets/images/starling.png" class="w-full" />
      </div>
      <div class="col-span-3 min-h-full bg-white p-4 md:order-2 md:mr-4">
        <h4 class="text-xl md:text-2xl font-black text-navy leading-tight pb-3">Remote data sensing for natural disasters and labor standards </h4>
        <p class="text-navy pb-6 font-body">A remote data sensing technology that doesn’t rely on local power or internet access to collect real-time, localized information. It allows clients to monitor, interpret and share accurate data to make informed decisions.</p>
        <a href="https://host-creative.com" target="_blank"><button type="button" class="whitespace-nowrap transition-all bg-red py-2 px-2 rounded-sm text-xs font-body font-semibold uppercase text-navy hover:bg-opacity-90">Learn more</button></a>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-7 mb-8">
      <div class="col-span-2 mb-6">
        <div class="block bg-red h-0.5 w-8 mb-4">&nbsp;</div>
        <h3 class="text-2xl md:text-3xl font-black text-gray-light leading-tight pb-3 mr-4">Albatross: Data and knowledge management API</h3>
      </div>
      <div class="col-span-2 min-h-full bg-gray overflow-hidden">
        <img src="./assets/images/albatross.png" class="w-full" />
      </div>
      <div class="col-span-3 min-h-full bg-white p-4">
        <h4 class="text-xl md:text-2xl font-black text-navy leading-tight pb-3">Versatile, purpose-built data management software</h4>
        <p class="text-navy pb-6 font-body">A robust digital data management tool that organizes, anonymizes and visualizes data. It allows clients to search and prepare data for consumption on other applications and create a knowledge base for better analysis and insights. </p>
        <a href="https://host-creative.com" target="_blank"><button type="button" class="whitespace-nowrap transition-all bg-red py-2 px-2 rounded-sm text-xs font-body font-semibold uppercase text-navy hover:bg-opacity-90">Learn more</button></a>
      </div>
    </div>
  </div>
</div>

<footer class="text-center bg-navy px-4 text-white py-6 md:py-8">
  <h3 class="text-3xl md:text-5xl font-black leading-tight pb-6">Work with us</h3>
  <button type="button" class="whitespace-nowrap transition-all bg-red py-3 px-3 rounded-sm text-s font-body font-semibold uppercase text-navy hover:bg-opacity-90">Get in touch</button>
  <p class="text-gray font-body py-4 text-s">Washington, DC<span class="px-2">•</span>New York, New York<span class="px-2">•</span>Madrid, Spain<span class="px-2">•</span>Auckland, New Zealand</p>
</footer>



</template>

<style>

</style>
