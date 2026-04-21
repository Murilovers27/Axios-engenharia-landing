import "./style.css"

export default function Industries() {
  return (
    <section id="industrias" className="industries">
      <div className="container">
        <div className="industries__header">
          <span className="industries__eyebrow">Indústrias</span>
          <h2 className="industries__title">
            Setores onde atuamos
          </h2>
          <p className="industries__text">
            Nossa engenharia é aplicada em diferentes segmentos industriais,
            sempre respeitando normas, processos e particularidades de cada setor.
          </p>
        </div>

        <div className="industries__grid">
          <div className="industry-card">Alimentícia</div>
          <div className="industry-card">Farmacêutica</div>
          <div className="industry-card">Automotiva</div>
          <div className="industry-card">Agrícola</div>
          <div className="industry-card">Bens de Consumo</div>
          <div className="industry-card">Metalúrgica</div>
          <div className="industry-card">Química</div>
          <div className="industry-card">Indústria Geral</div>
        </div>
      </div>
    </section>
  )
}
