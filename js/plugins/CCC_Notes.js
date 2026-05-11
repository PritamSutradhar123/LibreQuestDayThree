/*:
 * @plugindesc Custom Quest Log for CCC Training Objectives (Auto-Wrap Version).
 * @help Use $gameVariables.setNote(id) in a script call to set Variable 1.
 */

(function() {
    // Blueprint for the variable function
    Game_Variables.prototype.setNote = function(id) {
        var note = "";
        switch (id) {
            // --- LIBREOFFICE SPECIFICATIONS & BASICS ---
            case 1: note = "CHARTS: There are a total of 10 charts available in LibreOffice Calc."; break;
            case 2: note = "PICTURES: There are 8 handles located around a selected picture."; break;
            case 3: note = "SPREADSHEET: In LibreOffice, Calc is used as the Spreadsheet Software."; break;
            case 4: note = "TABLES: The Split Table feature is used to divide a table into parts."; break;
            case 5: note = "TEMPLATE: The extension of a LibreOffice Calc template file is .ots."; break;
            case 6: note = "IMPRESS: In LibreOffice Impress, the default template is Title and Content."; break;
            case 7: note = "EFFECTS: The Animation menu is used to apply various effects to text in a slide."; break;
            case 8: note = "HTTP: HTTP stands for Hyper Text Transfer Protocol and typically uses port 80."; break;
            case 9: note = "DOCUMENTS: It is not possible to insert a 3D Model into a document."; break;
            case 10: note = "DEVICES: A Touch screen is considered both an input and output device."; break;

            // --- NETWORKING & TOPOLOGY ---
            case 11: note = "TOPOLOGY: A Hybrid topology is one that combines two or more different structures."; break;
            case 12: note = "HANDOUTS: Yes, you can print handouts in a LibreOffice presentation."; break;
            case 13: note = "FORMULA: Copying =$B2+C3 from A2 to C2 results in the formula =$D2+E3."; break;
            case 14: note = "STORAGE: LibreOffice Calc does not remotely save files on IBM Lotus Notes."; break;
            case 15: note = "CALC: In LibreOffice Calc, the formula bar is also known as the input line."; break;
            case 16: note = "EMAIL: The second part of an email address identifies the name of the email server."; break;
            case 17: note = "SHORTCUT: Use CTRL+Alt+E to activate the Extension Manager in LibreOffice Calc."; break;
            case 18: note = "OPERATIONS: The Solver can help clarify relations between cells in Multiple Operations."; break;
            case 19: note = "WYSIWYG: WYSIWYG stands for 'What you see is what you get'."; break;
            case 20: note = "NAVIGATION: Use Ctrl+Home to go to the beginning of a page."; break;

            // --- FORMATTING & HARDWARE ---
            case 21: note = "FORMS: In a Form, a Numerical field cannot be added."; break;
            case 22: note = "LISTS: Numbering styles apply alignment and numbering to bulleted lists."; break;
            case 23: note = "TEXT: The shortcut key for 'Unformatted Text' is Ctrl+Alt+Shift+V."; break;
            case 24: note = "SMTP: SMTP is the protocol used specifically for sending emails."; break;
            case 25: note = "ORIENTATION: The default page orientation used in Writer for printing is Portrait."; break;
            case 26: note = "PRINTERS: A Laser Printer is a type of non-impact based printing device."; break;
            case 27: note = "HOME KEY: The Home key is used to go to the beginning of a line."; break;
            case 28: note = "FILE: You can create a new document by choosing File >> New."; break;
            case 29: note = "VPN: VPN stands for Virtual Private Network."; break;
            case 30: note = "GOAL SEEK: The 'Goal Seek' feature is found under the Tools menu."; break;

            // --- INTERNET & HARDWARE ---
            case 31: note = "URL: URL stands for Uniform Resource Locator and was developed by Tim Berners-Lee."; break;
            case 32: note = "STORAGE: A Nibble is equivalent to 4 bits, while a Byte is 8 bits."; break;
            case 33: note = "EXPORT: LibreOffice Writer can export documents as both PDF and EPUB."; break;
            case 34: note = "WIFI: The IEEE standard for Wi-Fi is 802.11."; break;
            case 35: note = "EBCDIC: EBCDIC stands for Extended Binary Coded Decimal Interchange Code."; break;
            case 36: note = "SMS: SMS stands for Short Message Service."; break;
            case 37: note = "IMPRESS: Ctrl+H is the shortcut for Find and Replace in Impress."; break;
            case 38: note = "EXTENSION: The file extension for LibreOffice Impress is .odp."; break;
            case 39: note = "SELECTION: LibreOffice has 4 selection modes: Standard, Extending, Adding, and Block."; break;

            // --- SYSTEM COMPONENTS ---
            case 40: note = "NIC: NIC stands for Network Interface Card."; break;
            case 41: note = "HARDWARE: John Ambrose Fleming is the creator of the Vacuum Tube."; break;
            case 42: note = "MIME: MIME stands for Multipurpose Internet Mail Extensions."; break;
            case 43: note = "SPELLCHECK: Shift+F7 is the Calc shortcut key for automatic spell check."; break;
            case 44: note = "CALC: Use Shift+F3 to trace dependents in LibreOffice Calc."; break;
            case 45: note = "TOOLTIP: A tooltip is a small box that explains an icon when hovered over."; break;
            case 46: note = "FUNCTION: Use CTRL+F2 as the shortcut to insert a function in Calc."; break;
            case 47: note = "MATH: The result of the formula =quotient(509.8,7) is 72."; break;
            case 48: note = "BIOS: ROM memory is used to store BIOS on the motherboard."; break;
            case 49: note = "MATH: The value of the formula =quotient(5,2) is 2."; break;
            case 50: note = "NETWORKING : There are two protocols in Transport layer 1. TCP, 2. UDP."; break; 

            default: note = "System error: Note ID " + id + " not found."; break;
        }

        // --- AUTOMATIC WRAPPER LOGIC ---
        function wrapText(str) {
            var maxLength = 45; // Max characters per line for the default window
            var words = str.split(' ');
            var currentLine = '';
            var finalOutput = '';

            for (var i = 0; i < words.length; i++) {
                if ((currentLine + words[i]).length <= maxLength) {
                    currentLine += (currentLine === '' ? '' : ' ') + words[i];
                } else {
                    finalOutput += currentLine + '\n';
                    currentLine = words[i];
                }
            }
            return finalOutput + currentLine;
        }

        // Apply wrap and save to Variable 1
        var wrappedNote = wrapText(note);
        this.setValue(1, wrappedNote); // Sets \V[1]
    };
})();