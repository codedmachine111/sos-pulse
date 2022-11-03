import emailjs from '@emailjs/browser';

export const sendEmail = async (email_content) => {
    
    await emailjs.send('service_ovl2n1s', 'template_pavi12i', email_content,'QT5ltA7BuoH7IMiRu')
    .then(function(response) {
        alert("Mail sent successfully!");
    }, function(error) {
       console.log('FAILED...', error);
    });
}