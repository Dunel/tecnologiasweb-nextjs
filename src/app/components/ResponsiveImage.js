
import Image from 'next/image';

const ResponsiveImage = () => {

  return (
    <div className="bg-[#fff]">
        <br/>
        <h1 className="text-4xl font-bold mb-8 text-blue-900 text-center">Optimización de Imágenes con Next.js y Tailwind CSS</h1>
        <p className="text-2xl mb-8 text-blue-900 text-justify">
            Next.js optimiza automáticamente las imágenes, cargando solo las necesarias para el viewport actual y redimensionándolas según la resolución de la pantalla, usando clases de Tailwind CSS:
            <br/>  
           
            <b><i>block md:hidden</i></b>      
            <br/>  
            <b><i>hidden md:block</i></b>      
         
        </p>

        <div className="relative w-100 h-screen text-center">
       
            <Image
                src="https://procinal.com/uploads/PELICULAS/Img_movies/Img_360x500/360%20X%20500intensamente2.jpg"
                alt="Mobile Image"
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="100%"
                className="w-full h-full block md:hidden"
            />
       
            <Image
                src="https://i0.wp.com/www.homosensual.com/wp-content/uploads/2024/06/test-que-personaje-emocion-de-intensamente-eres-disney-2.jpg?fit=1280%2C720&ssl=1"
                alt="Desktop Image"
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="100%"
                className="w-full h-full hidden md:block"
            />
          
        </div>

        <p className="text-2xl mb-8 text-blue-900 text-justify space-x-5">
       
            <br/>   
            <b>Regla CSS para image en pantalla movil ➡️ <i>block md:hidden</i></b> ➡️ muestra este elemento, pero cuando su tamano sea <b>md:</b> o sea cuando el ancho de la pantalla sea igual o mayor a 768px., oculta este elemento.
            <br/>   
            <br/>   
            <b>block:</b> Esta clase aplica <i>display: block;</i> al elemento. Esto significa que el elemento será visible y ocupará todo el ancho disponible de su contenedor padre.
            <br/>            
            <b>hidden</b> aplica <i>display: none;</i> al elemento, ocultándolo completamente.
            <br/>            
            <br/>            
            <b>md:hidden:</b>  Esta es una clase responsiva que se aplica a partir del breakpoint "md" (medium) de Tailwind, que por defecto es 768px.
            <br/>                        
            El prefijo <b>md:</b> indica que esta clase se aplicará solo cuando el ancho de la pantalla sea igual o mayor a 768px.
        </p>
    </div>
  );
};

export default ResponsiveImage;
