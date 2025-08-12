// Contact Number ট অবশ্যই 11 digit এর হেত হেব ।  
// Contact Number ট  শুরু হেব  "01" িদেয়  
// Contact Number এ কান স থাকো যােব নো ।  
// যিদ ইনপুট ট string নো হয়  তাহেল  "Invalid"  ং  িরটান করেব। 

function validContact(contact)
{
    if(typeof contact === 'string')
    {
        if(contact.length === 11 && contact.startsWith('01') === true && contact.includes(' ') !== true )
        {
            return true;
        }
        // else if(contact.startsWith('01') === true)
        // {
        //     return true;
        // }
        // else if(contact.includes(' ') === true)
        // {
        //     return false;
        // }
        else
        {
             return false;
        }
    }
    else
    {
        return 'Invalid'
    }
    
}
const contact='01580049420';
const result=validContact(contact);
console.log(result);