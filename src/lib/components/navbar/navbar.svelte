<script>
    import logo from '../../icons/wihi-logo.png';
    import settingsIcon from '$lib/icons/settings-icon.png';
  
    let links = [
      {href: '/', label: 'Stations', rel: 'none'},
      {href: 'https://docs.wihi.cc', label: 'Docs', rel: 'external'}
    ];
  
  </script>
  
  <div class="absolute z-50 text-white w-full flex justify-center">
      <nav class="bg-transparent/40 shadow-lg drop-shadow-lg backdrop-blur w-full">
          <div class="relative flex justify-between h-12 items-center mx-[17%]"f >
  
            <div class="flex flex-shrink-0 items-center">
              <a href="https://www.wihi.cc/" class="ml-2 font-medium text-lg"> <img alt class="h-8 w-auto lg:block" src={logo}> </a>
            </div>
  
            <div class="flex flex-row space-x-1 items-center">
              <ol class=" flex flex-row space-x-4">
                {#each links as { href, label, rel }}
                  <li><a href={href} rel={rel}>{label}</a></li>
                {/each}
              </ol>
  
              <!-- <div> <MenuDropdown imgSrc={settingsIcon}/> </div> -->
            </div>
          </div>
      </nav>
  </div>
  