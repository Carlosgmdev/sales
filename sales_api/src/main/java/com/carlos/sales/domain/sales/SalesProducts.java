package com.carlos.sales.domain.sales;

import com.carlos.sales.domain.products.Product;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "sales_products")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class SalesProducts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @NotNull(message = "Sale is required")
    private Sale sale;
    @ManyToOne
    @NotNull(message = "Product is required")
    private Product product;
    @NotNull(message = "Quantity is required")
    private Integer quantity;
}
