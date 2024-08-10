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
            <div class="col-span-2 prose prose-invert max-w-none blog-content">
                {@html data.content}
            </div>
        </div>
    </div>
</div>

<style>
  .blog-content :global(h1),
  .blog-content :global(h2),
  .blog-content :global(h3),
  .blog-content :global(h4),
  .blog-content :global(h5),
  .blog-content :global(h6) {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  .blog-content :global(p) {
    margin-bottom: 1em;
  }
  .blog-content :global(ul),
  .blog-content :global(ol) {
    margin-bottom: 1em;
    padding-left: 2em;
  }
</style>