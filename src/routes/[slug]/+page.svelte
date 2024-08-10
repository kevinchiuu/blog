<script>
  export let data;
</script>

<div class="bg-primary-bg h-screen text-white flex flex-col flex-grow">
    <div class="pt-[4%] mx-[20%]">

        <div class="mb-5">
            <h1 class="text-4xl font-semibold"> {data.metadata.title} </h1>
            <h1 class="pb-1 text-gray-300"> {data.metadata.date} </h1>
        </div>

        <div class="grid grid-cols-3 gap-4">
            <!-- <div class="col-span-2 ..."> dataaa </div>
			{@html data.content} -->
             <div class="col-span-2 prose prose-invert max-w-none">
                {@html data.content}
             </div>
        </div>
    </div>
</div>

<style>
  :global(h1, h2, h3, h4, h5, h6) {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  :global(p) {
    margin-bottom: 1em;
  }
  :global(ul, ol) {
    margin-bottom: 1em;
    padding-left: 2em;
  }
</style>