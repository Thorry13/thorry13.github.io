const orcidId = "0009-0005-8919-9857";
        const apiUrl = `https://pub.orcid.org/v3.0/${orcidId}/works`;

        fetch(apiUrl, {
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            const publicationsContainer = document.getElementById("publications");
            data.group.forEach(group => {
                group["work-summary"].forEach(work => {
                    const title = work.title?.title?.value || "No title";
                    const doi = work["external-ids"]?.["external-id"]?.find(id => id["external-id-type"] === "doi")?.["external-id-value"] || "";
                    const journal = work["journal-title"]?.value || "No journal";
                    const year = work["publication-date"]?.year?.value || "No year";
                    // const url = work["external-ids"]?.["external-id"]?.find(id => id["external-id-type"] === "doi")?.["external-id-url"];

                    const publicationElement = document.createElement("div");
                    publicationElement.className = "publication";
                    publicationElement.innerHTML = `
                        <div class="publication-title">${title}</div>
                        <div class="publication-details">
                            ${journal} (${year})${doi ? ` | DOI: <a href="https://doi.org/${doi}" target="_blank">${doi}</a>` : ""}<br/>
                        </div>
                    `;
                    publicationsContainer.appendChild(publicationElement);
                });
            });
        })
        .catch(error => {
            console.error("Error fetching ORCID data:", error);
            document.getElementById("publications").innerHTML = "<p>Error loading publications. Please try again later.</p>";
        });
