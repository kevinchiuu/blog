<script>
  export let data;
</script>

<div class="bg-primary-bg min-h-screen text-white flex flex-col">
    <!-- Add padding-top to account for the navbar height -->
    <div class="pt-16 md:pt-24 px-4 md:px-[10%] lg:px-[20%]">
        <div class="mb-5">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-semibold break-words">
                {data.metadata.title}
            </h1>
            <p class="pb-1 text-gray-300 text-sm md:text-base">
                {data.metadata.date}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="col-span-1 md:col-span-2 prose prose-invert prose-sm md:prose-base lg:prose-lg max-w-none blog-content">
                {@html data.content}
            </div>
            <div class="col-span-1 hidden md:block">
                <!-- Sidebar content can go here -->
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
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  .blog-content :global(p) {
    margin-bottom: 1em;
  }
  .blog-content :global(ul),
  .blog-content :global(ol) {
    margin-bottom: 1em;
    padding-left: 1.5em;
  }
  @media (max-width: 640px) {
    .blog-content :global(h1) { font-size: 1.5em; }
    .blog-content :global(h2) { font-size: 1.3em; }
    .blog-content :global(h3) { font-size: 1.2em; }
  }
</style>