/*:
 * @plugindesc CCC Quiz Engine - Complete 50 MCQ Logic with Auto-Wrap.
 * @help 1. Use $gameVariables.askQuestion(id) to load data.
 * 2. Use \V[1] for Question, \V[4]-\V[7] for Choices.
 * 3. Variable #3 stores the Correct Answer Index (1-4).
 * 4. Variable #16 stores the Correct Answer Text (String).
 */

(function() {
    Game_Variables.prototype.askQuestion = function(id) {
        var q = "", a = "", b = "", c = "", d = "", ans = 0;

        switch (id) {
            case 1:
                q = "Total charts are in LibreOffice Calc:";
                a = "8"; b = "12"; c = "14"; d = "10";
                ans = 4; break; 
            case 2:
                q = "There are ___ handles around a selected picture:";
                a = "5"; b = "6"; c = "7"; d = "8";
                ans = 4; break; 
            case 3:
                q = "In LibreOffice, Which of the following is used as Spreadsheet Software?";
                a = "Math"; b = "Calc"; c = "Writer"; d = "Customized software";
                ans = 2; break; 
            case 4:
                q = "Which feature is used to divide a table into parts?";
                a = "Split Table"; b = "Merge Table"; c = "Insert Table"; d = "Format Table";
                ans = 1; break; 
            case 5:
                q = "What is the extension of calc template file?";
                a = ".xls"; b = ".ods"; c = ".ots"; d = ".xlsx";
                ans = 3; break; 
            case 6:
                q = "In LibreOffice Impress Presentation the default template is?";
                a = "Image Only"; b = "Content Only"; c = "Title Only"; d = "Title and Content";
                ans = 4; break; 
            case 7:
                q = "Which menu is used to apply various effects to the text in a slide?";
                a = "Animation"; b = "Design"; c = "Transitions"; d = "Slide Show";
                ans = 1; break; 
            case 8:
                q = "What is the meaning of HTTP?";
                a = "Huge Text Transfer Protocol"; b = "Hyper Tetra Transfer Protocol"; c = "Hyper Text Transfer Protocol"; d = "Heavy Text Transfer Protocol";
                ans = 3; break; 
            case 9:
                q = "It is not possible to insert ___ in a document.";
                a = "Image"; b = "Shape"; c = "Video"; d = "3D Model";
                ans = 4; break; 
            case 10:
                q = "Which is both input & output device?";
                a = "Plotter"; b = "OCR"; c = "Touch screen"; d = "Printer";
                ans = 3; break; 
            case 11:
                q = "Which topology combines two or more structure?";
                a = "Bus"; b = "Star"; c = "Ring"; d = "Hybrid";
                ans = 4; break; 
            case 12:
                q = "can you print handouts in a presentation?";
                a = "Yes"; b = "No"; c = "Cant Say"; d = "May be";
                ans = 1; break; 
            case 13:
                q = "Formula in cell A2 is =$B2+C3 isdragged in cell C2 it will be:";
                a = "=$D3+E4"; b = "=$D2+E3"; c = "=$D2+E4"; d = "=$D3+E3";
                ans = 2; break; 
            case 14:
                q = "LibreOffice Calc does not remotely save the file on:";
                a = "Google Drive"; b = "One Drive"; c = "IBM Lotus Notes"; d = "FTP";
                ans = 3; break; 
            case 15:
                q = "By what other name is the formula bar known in LibreOffice calc?";
                a = "function bar"; b = "Name box"; c = "input line"; d = "none of these";
                ans = 3; break; 
            case 16:
                q = "The second part of email address identifies:";
                a = "name of bank"; b = "name of the email server"; c = "name of individual user"; d = "name of mobile operator";
                ans = 2; break; 
            case 17:
                q = "Shortcut to activate Extension Manager in LibreOffice Calc is:";
                a = "CTRL+E"; b = "CTRL+Alt+E"; c = "CTRL+Shift+E"; d = "CTRL+F9";
                ans = 2; break; 
            case 18:
                q = "Helps to clarify the relation between cells using Multiple Operations:";
                a = "Detective"; b = "Solver"; c = "Navigation"; d = "Hyperlink";
                ans = 2; break; 
            case 19:
                q = "WYSIWYG stands for:";
                a = "What you see is what you get"; b = "What you smell is what you get"; c = "Where are suspect is where you go"; d = "None of these";
                ans = 1; break; 
            case 20:
                q = "Which key is used to go to the beginning of the page?";
                a = "Ctrl+Home"; b = "Home"; c = "Arrow"; d = "Page Up";
                ans = 1; break; 
            case 21:
                q = "In a Form which field cannot be added?";
                a = "Time"; b = "Numerical"; c = "String"; d = "Date";
                ans = 3; break; 
            case 22:
                q = "Styles apply similar alignment, numbering and fonts to lists:";
                a = "Numbering"; b = "Character"; c = "Graphics"; d = "Paragraph";
                ans = 1; break; 
            case 23:
                q = "What is the shortcut key for 'Unformatted Text'?";
                a = "Ctrl+Shift+V"; b = "Ctrl+Shift+Alt+V"; c = "Ctrl+Alt+Shift+V"; d = "None";
                ans = 3; break; 
            case 24:
                q = "Match: the internet term with its description";
                a = "1-ii, 2-iv, 3-i, 4-iii"; b = "1-iv, 2-ii, 3-i, 4-iii"; c = "1-ii, 2-i, 3-iv, 4-iii"; d = "1-iii, 2-iv, 3-ii, 4-i";
                ans = 1; break; 
            case 25:
                q = "Which Page Orientation by default is used in writer while printing?";
                a = "Regular"; b = "Standard"; c = "Portrait"; d = "Plain";
                ans = 3; break; 
            case 26:
                q = "Non-impact based printing device is:";
                a = "Dot-Matric Printer"; b = "Scanner"; c = "Laser Printer"; d = "None";
                ans = 3; break; 
            case 27:
                q = "Match: i.Home, ii.End, iii.Ctrl+Home, iv.Ctrl+End";
                a = "i-a, ii-b, iii-c, iv-d"; b = "i-b, ii-a, iii-d, iv-c"; c = "i-c, ii-d, iii-a, iv-b"; d = "i-d, ii-c, iii-b, iv-a";
                ans = 3; break; 
            case 28:
                q = "We can create new document by choosing:";
                a = "File>>New"; b = "Edit >> New"; c = "Insert >> New"; d = "None";
                ans = 1; break; 
            case 29:
                q = "The full form of VPN in a computer is:";
                a = "Virtual Primary Network"; b = "Virtual Private Network"; c = "Virtual Processing Network"; d = "None";
                ans = 2; break; 
            case 30:
                q = "The Goal Seek feature is found under which menu?";
                a = "File"; b = "Edit"; c = "Tools"; d = "Data";
                ans = 3; break; 
            case 31:
                q = "What is the full form of URL and who developed it?";
                a = "Uniform Resource Locator - Tim Berners-Lee"; b = "United Resource Locator - Marc Andreessen"; c = "Unique Resource Location - Larry Page"; d = "Universal Resource Link - Vint Cerf";
                ans = 1; break; 
            case 32:
                q = "Match Size: 1.Nibble, 2.Byte, 3.1 GB, 4.1 PB";
                a = "1-ii, 2-iii, 3-iv, 4-i"; b = "1-ii, 2-iv, 3-iii, 4-i"; c = "1-iii, 2-ii, 3-iv, 4-i"; d = "None";
                ans = 1; break; 
            case 33:
                q = "LibreOffice Writer gives an option to export the document as:";
                a = "PDF"; b = "EPUB"; c = "Both PDF and EPUB"; d = "Only JPG";
                ans = 3; break; 
            case 34:
                q = "What is the IEEE standard for Wi-Fi?";
                a = "IEEE 802.3"; b = "IEEE 802.15.1"; c = "IEEE 802.16"; d = "IEEE 802.11";
                ans = 4; break; 
            case 35:
                q = "EBCDIC stands for:";
                a = "Extended Binary Coded Decimal Interchange Code"; b = "Extended Bit Code"; c = "Extended Bit Case"; d = "Extended Binary Case";
                ans = 1; break; 
            case 36:
                q = "What is the expansion of SMS?";
                a = "Short Message Service"; b = "Short Mail Service"; c = "Simple Mail Service"; d = "Simple Message Service";
                ans = 1; break; 
            case 37:
                q = "Shortcut for Find and Replace in LibreOffice Impress is:";
                a = "CTRL+G"; b = "CTRL+F"; c = "CTRL+I"; d = "CTRL+H";
                ans = 4; break; 
            case 38:
                q = "Libre office impress file extension is:";
                a = ".odp"; b = ".ods"; c = ".xls"; d = ".calc";
                ans = 1; break; 
            case 39:
                q = "How Many Selection mode is/are available in libreoffice?";
                a = "1"; b = "2"; c = "4"; d = "6";
                ans = 3; break; 
            case 40:
                q = "In computers, which is the full form NIC?";
                a = "Network Interface Card"; b = "Network Information Card"; c = "New Interface Card"; d = "New Information Card";
                ans = 1; break; 
            case 41:
                q = "Who created the VACCUM TUBE?";
                a = "John Ambrose Fleming"; b = "John Ambrose"; c = "John Biggins"; d = "Roger Mogualas";
                ans = 1; break; 
            case 42:
                q = "What does MIME stands for?";
                a = "Multipurpose Internet Mail Extra"; b = "Multipurpose Internet Mail End"; c = "Multipurpose Internet Mail Extensions"; d = "None";
                ans = 3; break; 
            case 43:
                q = "LibreOffice Calc shortcut key for automatic spell check:";
                a = "Shift+F7"; b = "CTRL+F7"; c = "Shift+F9"; d = "CTRL+F9";
                ans = 1; break; 
            case 44:
                q = "Shortcut to trace dependents in LibreOffice Calc is:";
                a = "Shift+F2"; b = "Shift+F5"; c = "Shift+F3"; d = "Shift+F9";
                ans = 3; break; 
            case 45:
                q = "Placing cursor over icon displays a box called ___:";
                a = "Toolbar"; b = "Toolbox"; c = "Tooltip"; d = "Toolkit";
                ans = 3; break; 
            case 46:
                q = "Shortcut to insert a function in LibreOffice Calc:";
                a = "CTRL+F2"; b = "CTRL+F1"; c = "CTRL+F3"; d = "CTRL+F9";
                ans = 1; break; 
            case 47:
                q = "What will be the =quotient(509.8,7)";
                a = "70"; b = "72"; c = "75"; d = "77";
                ans = 2; break; 
            case 48:
                q = "Memory used to store BIOS on Motherboard:";
                a = "ROM"; b = "RAM"; c = "CACHE"; d = "None";
                ans = 1; break; 
            case 49:
                q = "What will be the =quotient(5,2)";
                a = "6"; b = "8"; c = "2"; d = "4";
                ans = 3; break; 
            case 50:
                q = "Default font in LibreOffice Writer is:";
                a = "Liberation Serif"; b = "Liberation Sans"; c = "Times New Roman"; d = "Arial";
                ans = 1; break;

            default:
                q = "System Error: Missing Data for Question " + id;
                a = "-"; b = "-"; c = "-"; d = "-"; break;
        }

        // function wrap(str) {
        //     var max = 30; 
        //     var words = str.split(' ');
        //     var cur = '';
        //     var out = '';
        //     for (var i = 0; i < words.length; i++) {
        //         if ((cur + words[i]).length <= max) {
        //             cur += (cur === '' ? '' : ' ') + words[i];
        //         } else {
        //             out += cur + '\n';
        //             cur = words[i];
        //         }
        //     }
        //     return out + cur;
        // }

        var correctStr = "";
        if (ans === 1) correctStr = a;
        if (ans === 2) correctStr = b;
        if (ans === 3) correctStr = c;
        if (ans === 4) correctStr = d;

        this.setValue(2,q)
        // this.setValue(2, wrap(q));        // Question Text (Variable \V[2])
        this.setValue(3, ans);            // Current_Answer index (1-4)
        this.setValue(4, a);              // Choice 1
        this.setValue(5, b);              // Choice 2
        this.setValue(6, c);              // Choice 3
        this.setValue(7, d);              // Choice 4
        
        $gameVariables.setValue(16, String(correctStr));
    };
})();