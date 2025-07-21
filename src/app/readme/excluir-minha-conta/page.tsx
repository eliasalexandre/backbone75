import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos e condições da plataforma",
  description: "Regras gerais para o uso devido da plataforma.",
};

export default function ExcludeMyAccountPage() {
  return (
    <div className="mx-auto mt-9 pb-6 flex w-full max-w-[856px] flex-col items-start gap-2 lg:px-5 lg:gap-4">
      <h1 className="text-5xl leading-tight md:text-4xl font-bold mb-4">
        Termos e Condições de Uso
      </h1>

      <p className="mb-4">
        Bem-vindo à Cordial, plataforma de geração de currículos e listagem de
        vagas de emprego. Ao utilizar nossos serviços, você concorda com os
        seguintes Termos e Condições.
      </p>
      <p className="text-sm">
        Leia-os atentamente antes de se cadastrar e usar a plataforma.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          I. Uso dos Dados do Usuário
        </h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong>Coleta e Utilização de Dados:</strong> Ao fazer o cadastro
            na plataforma, você concorda com a coleta e utilização dos seus
            dados pessoais para fins de melhoria dos nossos serviços e entrega
            de conteúdos relevantes. Seus dados serão usados para personalizar
            sua experiência e oferecer serviços adequados às suas necessidades.
          </li>
          <li className="mb-2">
            <strong>Proteção e Segurança dos Dados:</strong> Seus dados estão
            protegidos por criptografia e nunca serão compartilhados com
            terceiros sem sua permissão. No entanto, seus dados podem ser
            utilizados internamente para a operação dos serviços existentes e
            futuros, garantindo a melhor performance e atendimento possível.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          II. Assinatura e Pagamento
        </h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong>Confirmação de Recibo:</strong> Ao assinar uma oferta, o
            recibo da transação ficará disponível para você por 3 dias úteis.
            Após a confirmação do pagamento, o recibo será marcado como
            confirmado e armazenado para seu registro.
          </li>
          <li className="mb-2">
            <strong>Política de Não Reembolso:</strong> É fundamental que você
            esteja completamente certo da sua decisão antes de efetuar o
            pagamento de uma oferta. Não realizamos devoluções de valores após o
            pagamento ser efetuado. Esta política é adotada para manter a
            integridade do nosso sistema de assinaturas e garantir a
            continuidade dos serviços oferecidos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">III. Condições Gerais</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong>Alterações nos Termos e Condições:</strong> Reservamo-nos o
            direito de modificar ou atualizar estes Termos e Condições a
            qualquer momento, sem aviso prévio. As mudanças entrarão em vigor
            imediatamente após a publicação no nosso site. Recomendamos que você
            revise periodicamente esta seção para se manter atualizado sobre as
            nossas práticas e políticas.
          </li>
          <li className="mb-2">
            <strong>Aceitação dos Termos:</strong> Ao continuar a usar a nossa
            plataforma após qualquer alteração nos Termos e Condições, você
            concorda em seguir e estar vinculado aos Termos modificados.
          </li>
          <li className="mb-2">
            <strong>Rescisão de Serviços:</strong> Reservamo-nos o direito de
            rescindir ou suspender seu acesso aos nossos serviços a qualquer
            momento, por qualquer motivo, incluindo, mas não limitado a,
            violação destes Termos e Condições.
          </li>
          <li className="mb-2">
            <strong>Lei Aplicável:</strong> Estes Termos e Condições serão
            regidos e interpretados de acordo com as leis do país onde a empresa
            está registrada, sem consideração a conflitos de princípios legais.
          </li>
        </ul>
      </section>

      <p className="mb-4">
        Agradecemos por escolher a nossa plataforma de geração de currículos. Se
        tiver alguma dúvida ou precisar de mais informações, entre em contato
        com nosso suporte ao cliente.
      </p>
    </div>
  );
}
