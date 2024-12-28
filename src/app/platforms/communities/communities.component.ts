import { Component, inject, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Subscription } from 'rxjs';
import { communitiesData } from "../../../system/DATA/communities/communities";
import { TemplateRef } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import { RandomImageService } from '../../../service/randomImage/random-image.service';

@Component({
  selector: 'app-communities',
  standalone: true,
  imports: [NgOptimizedImage, NgForOf, NgIf],
  styleUrls: ['./../../../system/css/customeCSS.scss'],
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
                      [ngSrc]="items.backComImage" width="50" height="50"
                      alt="{{ items.name }}"
                      style="max-width: 50px; border-radius: 5px; cursor: pointer; "
                      (click)="selectCommunity(items)"
                    />
                  </div>
                  <div class="col-auto">
                    <h6>{{ items.name }}</h6>
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
        <!-- Display the description -->
        <p><strong>Description:</strong> {{ selectedCommunity?.description }}</p>

        <!-- Display the global dominance -->
        <p><strong>Global Dominance:</strong> {{ selectedCommunity?.global_dominance }}%</p>

        <!-- Display the general usage -->
        <p><strong>General Usage:</strong> {{ selectedCommunity?.general_usage }}</p>

        <!-- Display monthly active users -->
        <p><strong>Monthly Active Users:</strong> {{ selectedCommunity?.monthly_active_users }} million</p>

        <!-- Display the age demographic -->
        <p><strong>Age Demographic:</strong> {{ selectedCommunity?.age_demographic }}</p>

        <!-- Display the market share -->
        <p><strong>Market Share:</strong> {{ selectedCommunity?.market_share_in_social_media }}%</p>

        <!-- Display the platform growth rate -->
        <p><strong>Growth Rate:</strong> {{ selectedCommunity?.platform_growth_rate }}%</p>

        <!-- Display pages and groups -->
        <div *ngIf="selectedCommunity?.pages_groups?.length > 0">
          <h4>Pages and Groups:</h4>
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" *ngFor="let pageGroup of selectedCommunity.pages_groups">
              <a [href]="pageGroup.link" target="_blank">
                <img [src]="pageGroup.logo" alt="{{ pageGroup.name }} logo" class="page-logo img-fluid" />
                <span>{{ pageGroup.name }}</span>
              </a>
            </div>
          </div>


          <!--  <li *ngFor="let pageGroup of selectedCommunity.pages_groups">
              <a [href]="pageGroup.link" target="_blank">
                <img [src]="pageGroup.logo" alt="{{ pageGroup.name }} logo" class="page-logo" />
                <span>{{ pageGroup.name }}</span>
              </a>
            </li>-->

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

  ngOnInit(): void {
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

  ngAfterViewInit() {
    console.log(this.communityModal);  // You can remove this in production
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
}
