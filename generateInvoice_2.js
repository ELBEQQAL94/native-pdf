export function generateInvoice_2() {
  const items = [
    {
      designation: "item 1",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 2",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 3",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 4",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 5",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 6",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 7",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 8",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 9",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 10",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 11",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 12",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 13",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 14",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 15",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 16",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 17",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 18",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 19",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 20",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 21",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 22",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 23",
      quantite: 147,
      prixunitaire: 110
    },
    {
      designation: "item 24",
      quantite: 147,
      prixunitaire: 110
    }
  ];

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
    /* Styles go here */
   .page-header, .page-header-space {height: 100px}
  
   .page-footer, .page-footer-space {height: 200px}

  .page-header {
    position: fixed;
    top: 0mm;
    width: 100%
  }

  .date{
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
    padding: 3px 10px;
    font-size: 1.5rem;
    text-align: center;
    color: blue;
  }
  
  .table_container{margin: 4em 0}

  .table_info{border-collapse: collapse;width: 100%}

  .table_info td, .table_info th {border: 1px solid #ddd;padding: 8px}

  .table_info tr:nth-child(even){background-color: #f2f2f2;}

  .table_info tr:hover {background-color: #ddd;}

  .total{
    width: 100%;
    padding: 7px;
    font-size: 1.2rem
  }

.total span {padding-left: 4em}

.total_lettre {font-size: 1rem}

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
  
.page-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px dashed black;
  padding: 7px 
}
  
.page {page-break-after: always}
  
  @page {margin: 20mm}
  
  @media print {
    thead {display: table-header-group;} 
    tfoot {display: table-footer-group;}
    body {margin: 0;}
  }

  table { page-break-inside:auto }
  tr    { page-break-inside:avoid; page-break-after:auto }
  thead { display:table-header-group }
  tfoot { display:table-footer-group }

  </style>
</head>

<body>

  <div class="page-header" style="text-align: center">
    <img 
      src='http://ae.gov.ma/wp-content/themes/ae-theme/images/ae_logo.jpg' 
      alt="auto-entrepreneur" 
      title="auto-entrepreneur" 
    />
  </div>

  <table style="width: 100%">

    <thead>
      <tr>
        <td>
          <!--place holder for the fixed-position header-->
          <div class="page-header-space"></div>
        </td>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          <div class='date'>
            <span>Date:</span>
            10/12/2019
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div class='facture'>
             <div>
              Facture némuro 001
             </div>
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="client">
            <strong>Client:</strong>
            Mr.ELBEQQAL Youssef
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="adress">
            <strong>
              Adress:
            </strong>
            Av rita 147/78, Mt ju
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="adress">
            <strong>
              Mr.ELBEQQAL Youssef/ICE:
            </strong>
            14527895
          </div>
        </td>
      </tr>

      <tr>
        <td>  
          <div class="table_container">

            <table class="table_info">
              <thead>
               <tr>
                  <th>Designation</th>
                  <th>Quantite</th>
                  <th>Prixunitaire</th>
                  <th>Total</th>
                </tr>
              </thead>
              ${items.map(item => {
                return `
                <tbody>
                  <tr>
                    <td>
                      ${item.designation}
                    </td>

                    <td>
                      ${item.quantite}
                    </td>

                    <td>
                      ${item.prixunitaire}
                    </td>

                    <td>
                      ${item.prixunitaire * item.quantite} 
                    </td>
                  </tr>
                </tbody>`;
              })}
            </table>
          </div>
        </td>
      </tr>

      </br>

      <tr>
        <td>
          <div class='total'>
            Montant en dirhams exonéré de la TVA,
            <span>Total Net à payer 1000</span>
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="total_lettre">
            ARRETE LA PRESENT DE LA FACTURE DE LA SOMME DE :
            <p>1000dhs</p>
          </div>
        </td>
      </tr>
      
      <tr>
        <td>
          <div class="signature">
            Signtaure:
          </div>
        </td>
      </tr>
      
    </tbody>

    <tfoot>
      <tr>
        <td>
          <!--place holder for the fixed-position footer-->
          <div class="page-footer-space"></div>
        </td>
      </tr>
    </tfoot>

  </table>

  <div class="page-footer">
    <div class="auto_entrepreneur">
      AutoEntrepreneur: Econostic
    </div>
    <div class="cnie">
      CNIE: AE230703
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
    <div class="if">
      IF: 1478952357
    </div>
    <div class="taxe">
      Taxe Professionnelle N°: 
      1478965

    </div>
    <div class="if">
      TELE: 0675058801
    </div>
    <div class="taxe">
      Mail: <mail>keep.try77@gmail.com</mail>            
    </div>
  </div>

</body>

</html>
  `;
  return html;
}
