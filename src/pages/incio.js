import Layout from "../layout";
import Header from "../components/header";
import { proyectos } from "../hooks/countProyects";

export default function Incio() {
  return (
    <Layout>
      <Header />

      <section class="bg-gray-900 items-center flex py-24">
        <div class="flex flex-wrap mx-auto md:flex-nowrap p-4 md:p-12">
          {proyectos.map((proyect, index) => {
            return (
              <a href="">
                <div class="w-full">
                  <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-indigo-800 hover:bg-indigo-600 shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                    <img
                      class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                      src={proyect.photos[0]}
                      alt="blog"
                    />
                    <div class="px-6 py-8">
                      <h4 class="mt-4 text-3xl font-semibold text-white">
                        <span class="">{proyect.name}</span>
                      </h4>
                      <p class="mt-4 text-base font-normal text-gray-200 leading-relax">
                        {proyect.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      
    </Layout>
  );
}
