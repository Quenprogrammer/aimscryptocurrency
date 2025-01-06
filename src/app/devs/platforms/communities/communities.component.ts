import { Component, inject, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Subscription } from 'rxjs';
import { communitiesData } from "../../../../system/DATA/communities/communities";
import { TemplateRef } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import { RandomImageService } from '../../../../service/randomImage/random-image.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-communities',
  standalone: true,
  imports: [NgOptimizedImage, NgForOf, NgIf, FormsModule, ReactiveFormsModule],
  styleUrls: ['./../../../../system/css/customeCSS.scss'],
  template: `




    <style>
      .page-logo {
        border-radius: 10%;
        width: 100%;
        height: 120px; /* Default height */
        object-fit: cover;
      }

      @media (max-width: 768px) {
        .page-logo {
          border-radius: 10%;
          height: 120px; /* Smaller height for medium screens */
        }
      }

      @media (max-width: 576px) {
        .page-logo {
          border-radius: 20%;
          height: 100px; /* Even smaller height for small screens */
        }
      }

    </style>
    <section class="container mt-3">
      <div class="row mt-5 overflow-hidden " style="padding: 5px">

        <div class="col-md-12">
          <div class="row">
            @for(items of communitiesData; track items.name){
              <div class="col-4 col-lg-2 mt-2">
                <div class="rounded-3 aos-init aos-animate text-center" data-aos="zoom-in" data-aos-easing="ease-out-back"
                     data-aos-delay="300">
                  <div class="col">
                    <img
                      src="{{ items.backComImage }}"  alt="{{ items.name }}"
                      style="max-width: 50px; border-radius: 5px; cursor: pointer;"
                      (click)="selectCommunity(items)"
                    />
                  </div>

                  <div class="col-auto">
                    <h6 style="text-decoration: none !important; color: inherit !important;">{{ items.name }}</h6>
                  </div>
                </div>
              </div>


            } </div>
        </div>
      </div>
    </section>

    <ng-template #communityModal let-modal>

      <div class="modal-header">
        <h4 class="modal-title">{{ selectedCommunity?.name }}</h4>
        <button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss('Cross click')"></button>
      </div>
      <div class="modal-body">





        <div class="container">
          <div class="row">
            <div class="col-lg-8 mb-9 mb-lg-0">
              <!-- Page Header -->
              <div class="container pt-4">
                <div class="page-header">
                  <!-- Profile Cover -->
                  <div class="profile-cover">
                    <div class="profile-cover-img-wrapper">
                      <img style="height: 150px; width: 100%; object-fit: cover; border-radius: 10px" class="profile-cover-img" src="/assets/Platforms/p78.webp" alt="Image Description">
                    </div>
                  </div>

<div class="row">
  <div class=" col-6 col-md-8" >
    <div class="row">
      <div class="col-auto" style="margin-left: 8px; margin-top: -33px">
        <div class="card" style="height: 120px">
        <img style="width: 100px; height: 100px" class="p-2" [src]= selectedCommunity?.backComImage alt="Review rating" data-bs-toggle="tooltip" data-bs-placement="top" title="Claimed profile">
        </div>
      </div>
      <div class="col-6">

        <h1 class="h2 mb-1">{{ selectedCommunity?.name }}</h1>
        <div class="d-flex gap-1">
          <img src="/assets/svg/star.svg" alt="Review rating" width="14">
          <img src="/assets/svg/star.svg" alt="Review rating" width="14">
          <img src="/assets/svg/star.svg" alt="Review rating" width="14">
          <img src="/assets/svg/star.svg" alt="Review rating" width="14">
          <img src="/assets/svg/star.svg" alt="Review rating" width="14">


        </div>
      </div>
    </div>

  </div>
  <div class="col-6 col-md-4">
    <div class="col-md-auto align-self-md-end mt-2">
      <div class="d-grid d-sm-flex gap-2">
        <a class="btn btn-primary" href="#">54 Open jobs</a>

      </div>
    </div>
  </div>
</div>




                </div>
              </div>
              <!-- End Page Header -->
              <!-- Nav Scroller -->
              <div class="js-nav-scroller hs-nav-scroller-horizontal">


        <span class="hs-nav-scroller-arrow-next" style="display: none;">
          <a class="hs-nav-scroller-arrow-link" href="javascript:;">
            <i class="bi-chevron-right"></i>
          </a>
        </span>

              </div>
              <!-- End Nav Scroller -->

              <!-- Tab Content -->
              <div class="tab-content">
                <div class="tab-pane fade show active" id="propertyOverviewNavOne" role="tabpanel" aria-labelledby="propertyOverviewNavOne-tab">
                  <div class="mt-2">
                    <!-- Display the description -->

                    <div  class="">
                      <p><strong>Description:</strong> {{ selectedCommunity?.description }}</p>

                      <p><strong>Monthly Active Users:</strong> {{ selectedCommunity?.monthly_active_users }} million</p>

                      <!-- Display the global dominance -->


                    <!-- Display monthly active users -->
                    <div class="row">
  <div class="col-6"> <p><strong>Market Share:</strong> {{ selectedCommunity?.market_share_in_social_media }}%</p>
  </div>
  <div class="col-6">    <p><strong>Growth Rate:</strong> {{ selectedCommunity?.platform_growth_rate }}%</p>
  </div>

</div>
                    <div class="row">

                      <div class="col-6"><p><strong>Age Demographic:</strong> {{ selectedCommunity?.age_demographic }}</p></div>
                        <div class="col-6"> <p><strong>Growth Rate:</strong> {{ selectedCommunity?.platform_growth_rate }}%</p>

                      </div>
                      </div>
                    </div>

                          </div>


                  <div class="border-top border-bottom py-2 mt-4 mb-3">
                    <div class="row col-sm-divider">
                      <h4>Communities</h4>
                    </div>
                    <!-- End Row -->
                  </div>



                </div>

                     </div>
              <!-- End Tab Content -->

            </div>
            <!-- End Col -->

            <div class="col-lg-4">
              <!-- Sticky Block -->
              <div class="card card-bordered">
                <div class="card-body">
                  <h1>here</h1>

                </div>
                <!-- End Card -->
              </div>
              <!-- End Sticky Block -->
            </div>
            <!-- End Col -->
          </div>
          <!-- End Row -->


        </div>








        <div *ngIf="selectedCommunity?.pages_groups?.length > 0">

          <div class="row">
            <div class="col-4  col-md-3 col-lg-2 my-3 text-center" *ngFor="let pageGroup of getCurrentPageItems()">
              <a [href]="pageGroup.link" target="_blank" style="text-decoration: none !important;">
                <img style="width: 90px; height: 80px; object-fit: cover" loading="lazy" [src]="pageGroup.logo" alt="{{ pageGroup.name }} logo" class="page-logo img-fluid" />
                <h6 style="color: black;">{{ pageGroup.name }}</h6>
              </a>
            </div>
          </div>

          <!-- Pagination Controls -->
          <div class="pagination-controls text-center mt-3">
            <button (click)="previousPage()" [disabled]="currentPage === 1" class="btn btn-primary">Previous</button>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
            <button (click)="nextPage()" [disabled]="currentPage === totalPages" class="btn btn-primary">Next</button>
          </div>
        </div>





      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')">Close</button>
      </div>
    </ng-template>
  `
})
export class CommunitiesComponent implements AfterViewInit, OnDestroy {
  private modalService = inject(NgbModal);
  @ViewChild('communityModal') communityModal!: TemplateRef<any>;
  private selectedCommunitySubject = new BehaviorSubject<any>(null);
  selectedCommunity$ = this.selectedCommunitySubject.asObservable();
  private subscriptions: Subscription = new Subscription(); // Subscription container
  communitiesData = communitiesData;
  selectedCommunity: any = null;
  imageUrls: string[] = [
    '/assets/community/img_4.png',
    '/assets/community/img_3.png',
    '/assets/community/img_2.png',
    '/assets/community/img_5.png',
  ];
  randomImageUrl!: string;

  constructor(private randomImageService: RandomImageService) {}

  ngAfterViewInit(): void {
    // Pass the specific image URLs for this component to the RandomImageService
    this.randomImageService.setRandomImages(this.imageUrls);

    // Subscribe to randomImage$ observable and manage subscription
    this.subscriptions.add(
      this.randomImageService.randomImage$.subscribe(
        (imageUrl) => (this.randomImageUrl = imageUrl)
      )
    );

    // Subscribe to selected community observable and update the local `selectedCommunity`
    this.subscriptions.add(
      this.selectedCommunity$.subscribe(community => {
        this.selectedCommunity = community;
      })
    );
  }


  selectCommunity(community: any): void {
    this.selectedCommunitySubject.next(community);
    this.modalService.open(this.communityModal, { scrollable: true, size: 'lg' });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.subscriptions.unsubscribe();
    console.log('detroyed')
  }




  currentPage: number = 1;
  itemsPerPage: number = 12;  // Number of items per page (adjust as needed)

  get totalPages(): number {
    return Math.ceil(this.selectedCommunity?.pages_groups.length / this.itemsPerPage);
  }

  getCurrentPageItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.selectedCommunity?.pages_groups.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }






}
