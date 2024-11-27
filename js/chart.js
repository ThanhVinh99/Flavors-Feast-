

  function getChart() {
    document.querySelector(".bar-chart").innerHTML ="";
      var dataBills = [];
      orders.forEach(bill => {
        let totalPrice  = 0 ;  
           bill.items.forEach(a => {
               const food = foods.find(e => a.idFood == e.id);
               console.log(food);
               
               totalPrice += parseInt(food.price)*a.quanity ;
           })
           dataBills.push({
              idTable : bill.id,
              totalAmount: totalPrice
           })
      });

      var tableLabels = dataBills.map(element => `Table ${element.idTable}`);
      var totalbills = dataBills.map(element => element.totalAmount);
      const ctx = document.createElement("canvas");
      document.querySelector(".bar-chart").appendChild(ctx);
  
      new Chart(ctx, {
          type: "bar",
          data: {
            labels: tableLabels ,
            datasets: [
              {
                label: "REVENUE TOTAL",
                data: totalbills,
                backgroundColor: "#c5487a",
                borderColor: "#c5487a",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
  
        const piece = document.createElement("canvas");
        document.querySelector(".pie-chart").innerHTML = "";
      document.querySelector(".pie-chart").appendChild(piece);
    
      new Chart(piece, {
        type: "pie", // Use 'pie' for creating a pie chart
        data: {
          labels: tableLabels,
          datasets: [
            {
              label: "TOTAL REVENUE",
              data: totalbills,
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 0, 0, 0.6)",
                "rgba(0, 255, 0, 0.6)",
                "rgba(0, 0, 255, 0.6)",
                "rgba(128, 0, 128, 0.6)",
                "rgba(0, 128, 128, 0.6)",
                "rgba(128, 128, 0, 0.6)",
                "rgba(255, 165, 0, 0.6)",
                "rgba(0, 255, 255, 0.6)",
                "rgba(255, 0, 255, 0.6)",
                "rgba(128, 0, 0, 0.6)",
                "rgba(0, 128, 0, 0.6)",
                "rgba(0, 0, 128, 0.6)",
                // You can add more colors here if needed
              ],
              borderColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 0, 0, 0.6)',
                'rgba(0, 255, 0, 0.6)','rgba(0, 0, 255, 0.6)',
              'rgba(128, 0, 128, 0.6)',
              'rgba(0, 128, 128, 0.6)',
              'rgba(128, 128, 0, 0.6)',
              'rgba(255, 165, 0, 0.6)',
              'rgba(0, 255, 255, 0.6)',
              'rgba(255, 0, 255, 0.6)',
              'rgba(128, 0, 0, 0.6)',
              'rgba(0, 128, 0, 0.6)',
              'rgba(0, 0, 128, 0.6)',
              // You can add more colors here if needed
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
}