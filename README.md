# Chácaras Beira da Mata

Site responsivo em React, Next.js App Router e TypeScript. O projeto gera uma versão estática para GitHub Pages.

## Executar

Requer Node.js 20 ou superior.

```bash
npm ci
npm run dev
```

Para testar a versão publicada, execute `npm run build` e inspecione a pasta `out/`. O projeto usa `/chacarasbeiradamata` como basePath para o endereço https://efcolares.github.io/chacarasbeiradamata/.

## Publicação

O workflow `.github/workflows/deploy.yml` compila o site e envia `out/` para o GitHub Pages a cada push na branch `main`. Configure **Settings → Pages → Build and deployment → Source: GitHub Actions** uma vez no repositório. O GitHub Pages pode exigir que a publicação seja habilitada nas configurações do repositório.

## Antes de divulgar

- Atualize `src/data/site.ts` com localização e WhatsApp reais. O botão de WhatsApp só aparece após informar o número.
- Troque as imagens ilustrativas em `src/data/site.ts` por fotografias reais, com autorização de uso.
- Confirme serviços, comodidades, disponibilidade e condições antes de anunciá-los. Não há reservas nem pagamentos implementados.
