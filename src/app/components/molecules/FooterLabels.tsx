export default function FooterLabels() {
  return (
    <div className="flex flex-col gap-2 items-center mt-10 lg:flex-row lg:justify-between w-full">
      <div className="flex flex-col items-center lg:items-start">
        <span>Responsável Técnico:</span>
        <span className="font-bold text-darkTurquoise-400 mb-11 lg:mb-0">
          Jéssica Rodrigues | CRP: 04/65123
        </span>
      </div>

      <div className="flex flex-col items-center lg:items-end lg:flex-col-reverse">
        <span>
          Desenvolvido com carinho por
          <a
            href="https://almeida-matheus.com/"
            target="_blank"
            className="font-bold text-darkTurquoise-400 ml-1"
          >
            Matheus Almeida
          </a>
        </span>
        <span>© 2025. Todos os direitos reservados</span>
      </div>
    </div>
  );
}
