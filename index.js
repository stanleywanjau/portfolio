let tablinks =document.getElementsByClassName(" active-link")
    let tabcontent =document.getElementsByClassName("tab-content")
    function opentab(tabname){
      for(const tablink of tablinks){
        tablink.classlist.remove(" active-link");
      }
      for(const tabcontent of tabcontents){
        tabcontent.classlist.remove("active-tab");
      }
      event.currentTarget.classlist.add("active-link");
      document.getElementsByClassName(tabname).classlist.add("active-tab")
    }