# Site — Tião Medeiros

Site institucional construído com [Eleventy](https://www.11ty.dev/) + [Decap CMS](https://decapcms.org/), pronto para publicar na [Netlify](https://netlify.com).

## Estrutura

- `index.njk` — template principal (design/HTML/CSS/JS do site)
- `_data/*.json` — todo o conteúdo editável (textos, pautas, linha do tempo, projetos)
- `admin/` — painel de edição (Decap CMS)
- `img/uploads/` — fotos enviadas pelo painel
- `netlify.toml` — configuração de build para a Netlify

## Passo a passo completo

Veja o arquivo **guia-publicacao-site.docx** enviado junto com este projeto — ele tem o passo a passo ilustrado de como publicar o site e como a equipe edita o conteúdo no dia a dia.

## Rodando localmente (opcional, para desenvolvedores)

```bash
npm install
npm start        # roda em http://localhost:8080
npm run build    # gera a versão final em /_site
```
