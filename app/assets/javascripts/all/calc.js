/* PopUp Calculator Window*/

function PopupCalc(pageURL, title,w,h) {
var left = (screen.width/2)-(w/2);
var top = (screen.height/2)-(h/2);
var targetWin = window.open (pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
} 


/*Calculator Functions*/


function FormatTemp(strTemp)
{
  strTemp = "(" + strTemp.substring(1) + ")";
  //alert(strTemp);
  return strTemp;
}


 function UpdateFiles()
     {
     objForm = window.document.calculator;
 
             
    var CapitalFund = getValue(objForm.txtCapitalFunds.value);    
    var BankFunding = getValue(objForm.txtBankFunding.value);
    var BankInterestRate = objForm.txtBankInterestRate.value;	
        BankInterestRate=BankInterestRate.substring(0,BankInterestRate.length-1);
        BankInterestRate=(Number(BankInterestRate)/100);
    var GrossMarginPercent = objForm.txtGrossMarginPercent.value;
    GrossMarginPercent = GrossMarginPercent.substring(0,GrossMarginPercent.length -1);
    GrossMarginPercent = (Number(GrossMarginPercent)/100);
	 var SuplimentalLendersRate=objForm.txtSuplimentalLendersRate.value;
	     SuplimentalLendersRate=SuplimentalLendersRate.substring(0,SuplimentalLendersRate.length-1)
		 SuplimentalLendersRate=(Number(SuplimentalLendersRate)/100)
   
    var AnnualOverHead = getValue(objForm.txtAnnualOverhead.value);
   
    var TradeCycle = Math.round(objForm.txtTradeCycle1.value);
   
    var BanksFund = getValue(objForm.txtBanksFund.value);
   
    var SuplementalFunds=getValue(objForm.txtBanksSuplementalFund.value);
   
    var SuplementalFundsRate =objForm.txtSuplimentalLendersRate.value;
        SuplementalFundsRate = SuplementalFundsRate.substring(0,SuplementalFundsRate.length -1);
        SuplementalFundsRate = (Number(SuplementalFundsRate)/100);
   var AdditionalAval= getValue(objForm.txtBanksSuplementalFund.value)+getValue(objForm.txtBanksFund.value)-getValue(objForm.txtBankFunding.value);
   
   if(AdditionalAval<0)
   {
   objForm.txtAdditionAval.value=FormatTemp(formatCurrency(AdditionalAval));
   }
   else
   {
   objForm.txtAdditionAval.value=formatCurrency(AdditionalAval);
   }
   
	var AddtionalSales=AdditionalAval*(360/TradeCycle);
	if(AddtionalSales<0)
	{
	objForm.txtAdditionalSales.value=FormatTemp(formatCurrency(Math.round(AddtionalSales)));
	}
	else
	{
	objForm.txtAdditionalSales.value=formatCurrency(Math.round(AddtionalSales));
	}
	
	
	 var TransGrossProfit=AddtionalSales*Number(GrossMarginPercent);
	 if(TransGrossProfit<0)
	 {
	  objForm.txtTransGrossProfit.value=FormatTemp(formatCurrency(Math.round(TransGrossProfit)));
	 }
	 else
	 {
	 objForm.txtTransGrossProfit.value=formatCurrency(Math.round(TransGrossProfit));
	 }
	 
	 
	 var InterestOf=-(getValue(objForm.txtBanksSuplementalFund.value))*SuplimentalLendersRate-(getValue(objForm.txtBanksFund.value))*BankInterestRate+(getValue(objForm.txtBankFunding.value))*BankInterestRate;
	 
	 if(InterestOf<=0)
	 {
		objForm.txtInterestOf.value=FormatTemp(formatCurrency(Math.round(InterestOf)));
	 }	
	else
		objForm.txtInterestOf.value=formatCurrency(Math.round(InterestOf));
	// var AdditionalNetProfit=TransGrossProfit+InterestOf;
	// objForm.txtAdditionalNetProfit.value=AdditionalNetProfit;
    
	
     var EstimatedNetProfit=0;
     var TotalAmount=Number(CapitalFund) + Number(BankFunding);
     var TotalAmountForAllCycles=(360/TradeCycle )*(TotalAmount);
     var Gross=TotalAmountForAllCycles/(1- Number(GrossMarginPercent));
         EstimatedNetProfit = ((((360/TradeCycle )*(Number(CapitalFund) + Number(BankFunding))))* Number(GrossMarginPercent)) - (Number(AnnualOverHead))-(Number(BankFunding) * Number(BankInterestRate));
		
		   
		// EstimatedNetProfit=AdditionalNetProfit+( GrossProfit - AnnualExpence - InterestCost;);
       if (!(isNaN(EstimatedNetProfit)) && EstimatedNetProfit != "Infinity")
           {
             if (EstimatedNetProfit < 0)
              objForm.txtEstimatedNetProfit.value = FormatTemp(formatCurrency(Math.round(EstimatedNetProfit)));
              else                   
               objForm.txtEstimatedNetProfit.value = formatCurrency(Math.round(EstimatedNetProfit));            
     	   }	
          else    
          {
            objForm.txtEstimatedNetProfit.value = "0";                                                  
          }
       /* EstimatedNewNetProfit = ((360/TradeCycle )* (Number(CapitalFund) + Number(BanksFund) + Number(SuplementalFunds)) * Number(GrossMarginPercent) - (Number(AnnualOverHead)) - (Number(BanksFund) * Number(BankInterestRate)) - (Number(SuplementalFunds) * Number(SuplementalFundsRate)));*/
	  
         TotalResources =  (CapitalFund + BankFunding);
         objForm.txtTotalResources.value = formatCurrency(Number(TotalResources));
         
         TradeCycle2 = TradeCycle;
         objForm.txtTradeCycle2.value = TradeCycle2;
         AvailableCash = 360/TradeCycle2;
		 
         if (!(isNaN(AvailableCash)) && AvailableCash != "Infinity")
         {
         objForm.txtOverallAvlblCash.value = Math.round(AvailableCash);
		 objForm.txtAdditionalFunds.value = Math.round(AvailableCash);
         }
         else
         {
         objForm.txtOverallAvlblCash.value = "0";
		 objForm.txtAdditionalFunds.value =  "0";
         }
         TotalSales = Number(TotalResources * AvailableCash);
         var a=1- Number(GrossMarginPercent);

		 
         TotalSales = getValue(TotalSales);
         if (!(isNaN(TotalSales)) && TotalSales != "Infinity")
         {
           if (TotalSales < 0)
                  objForm.txtTotalSales.value = FormatTemp(formatCurrency(Math.round(TotalSales)));
               else     
                  objForm.txtTotalSales.value = formatCurrency(Math.round(TotalSales));
         }
         else
         {
         objForm.txtTotalSales.value = "0";
         }
         
         GrossMargin = GrossMarginPercent;
         objForm.txtGrossMargin.value = GrossMargin*100;
         GrossProfit = Number(TotalSales * GrossMargin);
         objForm.txtGrossProfit.value = formatCurrency(Math.round(GrossProfit));
         AnnualExpence = -AnnualOverHead;
			
		 if(AnnualExpence <= 0)	
         objForm.txtAnnualExpence.value = FormatTemp(formatCurrency(Math.round(AnnualExpence)));
		 else
         objForm.txtAnnualExpence.value = formatCurrency(Math.round(AnnualExpence));

         InterestCost =Number(-BankFunding * BankInterestRate);
		 
		 if(InterestCost <= 0)
         objForm.txtInterestCost.value = FormatTemp(formatCurrency(Math.round(InterestCost)));
		 else
         objForm.txtInterestCost.value = formatCurrency(Math.round(InterestCost));

         NetProfit = Number(GrossProfit + AnnualExpence + InterestCost);
		 
		 if(NetProfit < 0)
         objForm.txtNetProfit.value = FormatTemp(formatCurrency(Math.round(NetProfit)));
		 else
         objForm.txtNetProfit.value = formatCurrency(Math.round(NetProfit));
		 
		 
		 
         SupplimentalLendersProvider = SuplementalFunds;
        // objForm.txtSuplimentalLendersProvider.value =  formatCurrency(SupplimentalLendersProvider);
         SalesGenerate = Math.round((Number(CapitalFund) + Number(BanksFund) + Number(SuplementalFunds)) * 360/ Number(TradeCycle));
         SalesGenerate =getValue(SalesGenerate);
		  
		 
       /*  if (!(isNaN(SalesGenerate)) && SalesGenerate != "Infinity")
         {
          if (SalesGenerate < 0)
                   objForm.txtSalesGenerate.value = FormatTemp(formatCurrency(SalesGenerate));
               else     
                   objForm.txtSalesGenerate.value = formatCurrency(SalesGenerate);
         }
         else
         {
           objForm.txtSalesGenerate.value ="";
         }
       */
      GrossMarginwithGrossProfit = Math.round(SalesGenerate * GrossMarginPercent);
         //objForm.txtGrossMarginwithGrossProfit.value = formatCurrency(GrossMarginwithGrossProfit);
         InterestCosting = Math.round(Number(BankFunding) * Number(BankInterestRate));
       /*  if(InterestCosting < 0)
                objForm.txtInterestCosting.value = FormatTemp(formatCurrency(InterestCosting));
             else
             objForm.txtInterestCosting.value = formatCurrency(InterestCosting);*/
         PresentCost = Math.round(Number(BanksFund) * Number(BankInterestRate) + Number(SuplementalFunds) * Number(SuplementalFundsRate));
          /* if(PresentCost <0 )
                 objForm.txtInterestPresentCost.value = FormatTemp(formatCurrency(PresentCost));
                 else
                  objForm.txtInterestPresentCost.value = formatCurrency(PresentCost);*/
         InterestExtraCost =  PresentCost - InterestCosting;
        /* if (InterestExtraCost <0)
                 objForm.txtInterestExtraCost.value = FormatTemp(formatCurrency(InterestExtraCost));
                 else
                 objForm.txtInterestExtraCost.value =formatCurrency(InterestExtraCost); */
         SalesExtraCost = Number(SalesGenerate) - Number(TotalSales);
       /*  if (SalesExtraCost < 0)
               objForm.txtExtraSalesCreated.value = FormatTemp(formatCurrency(SalesExtraCost));
               else
               objForm.txtExtraSalesCreated.value = formatCurrency(SalesExtraCost);*/
        // AdditionalNetProfit =Math.round(SalesExtraCost * GrossMarginPercent - InterestExtraCost);
		 var AdditionalNetProfit=(AddtionalSales*Number(GrossMarginPercent))-((getValue(objForm.txtBanksSuplementalFund.value)*SuplimentalLendersRate)+(getValue(objForm.txtBanksFund.value)*BankInterestRate)-(getValue(objForm.txtBankFunding.value) *BankInterestRate));
	     
	       if(AdditionalNetProfit < 0)
                 objForm.txtAdditionalNetProfit.value = FormatTemp(formatCurrency(Math.round(AdditionalNetProfit)));
                 else
               objForm.txtAdditionalNetProfit.value = formatCurrency(Math.round(AdditionalNetProfit));
			   
			   
			   
		AdditionalNetProfit = 	TransGrossProfit + InterestOf;		   
	       if(AdditionalNetProfit < 0)
                 objForm.txtAdditionalNetProfit.value = FormatTemp(formatCurrency(Math.round(AdditionalNetProfit)));
                 else
               objForm.txtAdditionalNetProfit.value = formatCurrency(Math.round(AdditionalNetProfit));   
			   
	  var ToalNewNetProfit = AdditionalNetProfit+NetProfit;
	  //( GrossProfit - AnnualExpence - InterestCost);
		    if (!(isNaN(ToalNewNetProfit)) && ToalNewNetProfit != "Infinity")
         {
            if (ToalNewNetProfit < 0)            
                  objForm.txtTotalNewNetProfit.value = FormatTemp(formatCurrency(Math.round(ToalNewNetProfit)));
               else                             
                  objForm.txtTotalNewNetProfit.value = formatCurrency(Math.round(ToalNewNetProfit));
         }
         else
         {
          objForm.txtTotalNewNetProfit.value =  "0";
         }
	  
			   
      var  EstimatedNewNetProfit = AdditionalNetProfit+NetProfit;
	  //  ToalNewNetProfit
	  //  AdditionalNetProfit+( GrossProfit - AnnualExpence - InterestCost);
          if (!(isNaN(EstimatedNewNetProfit)) && EstimatedNewNetProfit != "Infinity")
         {
           if (EstimatedNewNetProfit < 0)
                   objForm.txtEstdNewNetProfit.value = FormatTemp(formatCurrency(Math.round(EstimatedNewNetProfit)));
               else     
                 objForm.txtEstdNewNetProfit.value = formatCurrency(Math.round(EstimatedNewNetProfit));
         }
         else
         {
            objForm.txtEstdNewNetProfit.value = "0";
         }
		 if(objForm.txtTotalResources.value=="")
         {
         objForm.txtTotalResources.value=="0";
         }
      		
}
    
                
    function formatCurrency(num)
     {
	        if (num=="")
            return "";
            num = num.toString().replace(/\$|\,/g,'');
            if(isNaN(num))
            num = "0";
            sign = (num == (num = Math.abs(num)));
            num = Math.floor(num*100+0.50000000001);
            num = Math.floor(num/100).toString();
            for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
            num = num.substring(0,num.length-(4*i+3))+','+
            num.substring(num.length-(4*i+3));
           // return (((sign)?'':'-') +  num + '.' + cents);
            return ((sign)?'':'-') +  num;
    }
    
   /* function Left(str, n)
	{
	     if (n <= 0)
	      return "";
	     else if (n > String(str).length)
	       return str;
	     else
	    return String(str).substring(0,n);
    }

    function Right(str, n)
	  {
        if (n <= 0)
          return "";
       else if (n > String(str).length)
          return str;
        else
		{
          var iLen = String(str).length;
          return String(str).substring(iLen, iLen - n);
        }
    }*/

  function getDecimal(num)
  {
	 if(num=="")
      return "";
	  // if (num.indexOf('%')  != -1) 
	  // {
         //alert(num);
	  // }
	 // if (num.indexOf('%')  != -1) 
		//{
			//var numLeft = Left(num,num.indexOf('%'))
			//if (num.length != num.indexOf('%'))
		//	{
				//	var numRight=Right(num,num.indexOf('%'))
				//	var numResult=numLeft+numRight;
			//}
		//	else
			//	numResult=numLeft
		
				//return numResult;
			//num.replaceAt(num,"%",num.indexOf('%'),"");
			//alert(num)
		//}
		//if(num=='.'||num=='%')
		//{
		//	s
		//}
		
		str = replaceAll(num, ".", "");
		str = replaceAll(num, "%", "");
		
		if(isNaN(str))
		  num = "0";
	   	if(num.indexOf('%')!=-1)
		{
			num=num.substring(0,num.length-1);
		}
		
	  
	  if (num.indexOf('%') == -1)         
         return num + '%'; 
      else 
         return num;
	
     
  }    
            

function replaceAll( str, from, to ) {
    var idx = str.indexOf( from );


    while ( idx > -1 ) {
        str = str.replace( from, to ); 
        idx = str.indexOf( from );
    }

    return str;
}
            

    function getValue(num)
    {
        if (num=="")
           return "";
        var noJunk = ""
        var withDollar = ""
        var foundDecimal = 0
        var foundAlphaChar = 0
        num += "";

        if (num == "") { return(0); }
        for (i=0; i <= num.length; i++)
        {
            var thisChar = num.substring(i, i+1);
            if (thisChar == ".")
            {
              foundDecimal = 1;
              noJunk = noJunk + thisChar;
            }
            if ((thisChar < "0") || (thisChar > "9"))
            {
              if ((thisChar != "$") && (thisChar !=".") && (thisChar != ",") && (thisChar != " ") && (thisChar !="")) foundAlphaChar = 1;
            }
            else 
             {
                withDollar = withDollar + thisChar
                noJunk = noJunk + thisChar
             }

             if ((thisChar == "$") || (thisChar == ".") || (thisChar == ","))
             {
               withDollar = withDollar + thisChar
             }
         }
         if (foundDecimal) { return parseFloat(noJunk); }
         else if (noJunk.length > 0) { return parseFloat(noJunk); }
         else return 0;
}

function setTextFocus()
{
  
  
//  for(i=0;i<theform.length;i++)
//  {
//     if(theform.elements[i].type == "text")
//      {
//         document.forms[0].elements[i].style.backgroundColor="#ffffff";
//         if (theform.elements[i].id != "txtCapitalFunds" && theform.elements[i].id!='txtBankFunding' && theform.elements[i].id!='txtBankInterestRate' && theform.elements[i].id!='txtGrossMarginPercent' && theform.elements[i].id!='txtAnnualOverhead' && theform.elements[i].id!='txtTradeCycle1' && theform.elements[i].id!='txtBanksFund' && theform.elements[i].id!='txtBanksSuplementalFund' && theform.elements[i].id!='txtSuplimentalLendersRate') 
//          {
//           document.forms[0].elements[i].style.border=2;
//           document.forms[0].elements[i].style.fontWeight="Bold"
//           document.forms[0].elements[i].style.color="Blue"
//           }
//           else
//           {
//           document.forms[0].elements[i].style.fontWeight="Bold"
//           document.forms[0].elements[i].style.color="Black"
//           }
//           
//       }          
//   }
 }
    //document.getElementById('txtCapitalFunds').style.font="verdana";
   //  document.getElementById('txtCapitalFunds').style.fontSize="12px" 
     // document.getElementById('txtCapitalFunds').style.fontWeight="Bold"; 


//-->

function ClearFields()
{
//Editable Fields
objForm = window.document.calculator;
objForm.txtCapitalFunds.focus();
objForm.txtCapitalFunds.value="";
objForm.txtBankFunding.value="";
objForm.txtBankInterestRate.value="";
objForm.txtGrossMarginPercent.value="";
objForm.txtAnnualOverhead.value="";
objForm.txtTradeCycle1.value="";
objForm.txtBanksFund.value="";
objForm.txtBanksSuplementalFund.value="";
objForm.txtSuplimentalLendersRate.value="";
//Non - Editable Fields
objForm.txtEstimatedNetProfit.value="";
objForm.txtTotalResources.value="";
objForm.txtTradeCycle2.value="";
objForm.txtOverallAvlblCash.value="";
objForm.txtGrossMargin.value="";
objForm.txtTotalSales.value="";
objForm.txtGrossProfit.value="";
objForm.txtAnnualExpence.value="";
objForm.txtInterestCost.value="";
objForm.txtNetProfit.value="";
objForm.txtEstdNewNetProfit.value="";
objForm.txtAdditionAval.value="";
objForm.txtAdditionalFunds.value="";
objForm.txtAdditionalSales.value="";
objForm.txtTransGrossProfit.value="";
objForm.txtInterestOf.value="";
objForm.txtAdditionalNetProfit.value="";
objForm.txtTotalNewNetProfit.value="";
}
