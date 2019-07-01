export function generateInvoice() {

  const items = [
    {
      designation: "item 1",
      quantite: 147,
      prixunitaire: 110,
    },
    {
      designation: "item 2",
      quantite: 147,
      prixunitaire: 110,
    },
    {
      designation: "item 3",
      quantite: 147,
      prixunitaire: 110,
    },
    {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
      {
        designation: "item 3",
        quantite: 147,
        prixunitaire: 110,
      },
  ];


  const html = `

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Facture</title>
  <style>

      *{box-sizing: border-box}

      html,body{padding:0;margin:0}

      .container{width: 1000px;margin: 5px auto}

      header {
        position: fixed;
        top: 0;
        width: 100%;
      }

      .logo {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2em;
      }

      .date{
          width: 100%;
          height: 40px;
          text-align: right;
          padding: 7px 0;
          font-size: 1.2rem;
      }

      .facture{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin: 1em 0;
      }

      .facture div {
          border: 1px solid;
          width: 25%;
          padding: 5px;
          font-size: 1.5rem;
          text-align: center;
      }

      .info_client{
         width: 100%;
         margin: 2em 0;
         display: flex;
         font-size: 1.2rem
      }

      .info_client .client{width: 40%}

      .info_client .adress{flex: 1}

      .table_container{margin: 4em 0}

      .table_info{border-collapse: collapse;width: 100%}

      .table_info td, .table_info th {border: 1px solid #ddd;padding: 8px}

      .table_info tr:nth-child(even){background-color: #f2f2f2;}

      .table_info tr:hover {background-color: #ddd;}

      .table_info th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: grey;
      }

      .total{
          width: 100%;
          padding: 7px;
          font-size: 1.7rem
      }

      .total span {padding-left: 4em}

      .total_lettre {margin: 2em 0;font-size: 1rem}

      .total_lettre p {color: red;font-size: 20px}

      .signature{
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2em;
          padding: 5px;
          height: 200px;
          font-size: 1.1rem
      }

      .hr {width: 100%;border-top: 2px dashed;color: grey}

      footer {
          margin: 0; 
          position: fixed;
          color: grey;
          font-size: 1.2rem;
          bottom:0;
      }

      footer .container {display: flex;width: 100%;margin : .7em 0}

      footer .container .auto_entrepreneur {flex: 1}

      footer .container .cnie {width: 50%}

      footer .adress, .ice {width: 100%;margin : .7em 0}

      footer .container .if {width: 30%}

      footer .container .taxe {flex: 1}

  </style>

</head>

<body>
  <div class="container">
      <header>

          <div class='logo'>

              <img src='http://ae.gov.ma/wp-content/themes/ae-theme/images/ae_logo.jpg' 
                   alt="auto-entrepreneur" 
                   title="auto-entrepreneur" 
              />

          </div>

          <div class='date'>
              <span>Date:</span>
              10/12/2019
          </div>

          <div class='facture'>
              <div>
                  Facture némuro 001
              </div>
          </div>

          <div class="info_client">
              <div class="client">
                  <strong>Client:</strong>
                  Mr.ELBEQQAL Youssef
              </div>

              <div class="adress">

                  <strong>
                      Adress:
                  </strong>
                  Av rita 147/78, Mt ju

              </div>

              <div class="adress">

                  <strong>
                      Mr.ELBEQQAL Youssef/ICE:
                  </strong>
                     14527895

              </div>

          </div>

      </header>

      <section>

          <div class="table_container">

              <table class="table_info">
                  
                   <tr>
                     <th>Designation</th>
                     <th>Quantite</th>
                     <th>Prixunitaire</th>
                     <th>Total</th>
                   </tr>

              ${items.map((item) => {

      return `
                  <tr>
                      <td>
                          ${item.designation}
                      </td>
  
      <div class='total'>

              Montant en dirhams exonéré de la TVA,
              <span>Total Net à payer</span>
              <span style="color:red">1000</span>

          </div>                <td>
                          ${item.quantite}
                      </td>
  
                      <td>
                          ${item.prixunitaire}
                      </td>
  
                      <td>
                          ${item.prixunitaire * item.quantite} 
                      </td>

                  </tr>`
  })}
              </table>

          </div>

          <div class='total'>

              Montant en dirhams exonéré de la TVA,
              <span>Total Net à payer</span>
              <span style="color:red">1000</span>

          </div>

          <div class="total_lettre">

              ARRETE LA PRESENT DE LA FACTURE DE LA SOMME DE :
              <p>1000dhs</p>

          </div>

          <div class="signature">

              Signtaure:

          </div>

      </section>

      <footer>

          <div class="hr"></div>

          <div class="container">

              <div class="auto_entrepreneur">

                  AutoEntrepreneur: Econostic

              </div>

              <div class="cnie">

                  CNIE: AE230703

              </div>

          </div>

          <div class="adress">

              <address>
                  Adress:  Av rita 147/78, Mt ju
              </address>

          </div>

          <div class="ice">

              ICE(N° d'inscription au registre national de l'auto-entrepreneur): 
              1478953657

          </div>

          <div class="container">

              <div class="if">

                  IF: 1478952357

              </div>

              <div class="taxe">

                  Taxe Professionnelle N°: 
                  1478965

              </div>

          </div>

          <div class="container">

              <div class="if">

                  TELE: 0675058801

              </div>

              <div class="taxe">

                  Mail: <mail>keep.try77@gmail.com</mail>
                  
              </div>

          </div>

      </footer>

  </div>
</body>

</html>`

  return html;

};