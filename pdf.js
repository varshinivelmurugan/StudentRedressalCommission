const PDFDocument=require('pdfkit');
const fs=require('fs');
const path=require('path');

const invoiceName= 'invoice-' + 'mess'+ '.pdf';
const invoicePath = path.join('data','invoices',invoiceName);

const pdfDoc =  new PDFDocument();
//setHeader('Content-Type','application/pdf');//it willopen document in browser
//setHeader('Content-Disposition','inline; filename= "'+ invoiceName +' "');
pdfDoc.pipe(fs.createWriteStream(invoicePath));
 
//pdfDoc.pipe(res);
pdfDoc.text('The Complaint that the ..............................................................The problem is addressed by ....................................... on ............................................The management will ensure that these kinds of problems wont arise in the future');
pdfDoc.end();