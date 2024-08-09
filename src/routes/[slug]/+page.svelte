<script>
  export let data;
</script>

<div class="bg-primary-bg h-screen text-white flex flex-col flex-grow">
    <div class="pt-[4%] mx-[20%]">

        <div class="mb-5">
            <h1 class="text-4xl font-semibold"> {data.filename} </h1>
            <h1 class="pb-1 text-gray-300"> Date </h1>
        </div>

        <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2 ..."> {data.content}</div>
            <div class="">05</div>
        </div>
    </div>
</div>