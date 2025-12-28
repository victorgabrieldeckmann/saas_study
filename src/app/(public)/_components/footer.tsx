export function Footer(){
    return(
        <footer className="text-center py-6 text-gray-500 text-sm md:text-base">
            <p>
                Todos os direitos reservados © {new Date().getFullYear()} - <span className="hover:text-black duration-300">@sujeitoprogramador</span>
            </p>
        </footer>
    )
}