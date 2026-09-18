export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      chibi_interventions: {
        Row: {
          chibi_id: string
          id: string
          intervention: string
          lesson_id: string | null
          recipe_id: string | null
          trigger_context: string | null
        }
        Insert: {
          chibi_id: string
          id?: string
          intervention: string
          lesson_id?: string | null
          recipe_id?: string | null
          trigger_context?: string | null
        }
        Update: {
          chibi_id?: string
          id?: string
          intervention?: string
          lesson_id?: string | null
          recipe_id?: string | null
          trigger_context?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chibi_interventions_chibi_id_fkey"
            columns: ["chibi_id"]
            isOneToOne: false
            referencedRelation: "chibis"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chibi_interventions_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chibi_interventions_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      chibis: {
        Row: {
          description: string | null
          id: string
          level: number
          name: string
        }
        Insert: {
          description?: string | null
          id?: string
          level: number
          name: string
        }
        Update: {
          description?: string | null
          id?: string
          level?: number
          name?: string
        }
        Relationships: []
      }
      competency_progress: {
        Row: {
          competency_slug: string
          evidence_count: number
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          competency_slug: string
          evidence_count?: number
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          competency_slug?: string
          evidence_count?: number
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      courses: {
        Row: {
          created_at: string
          description: string | null
          id: string
          slug: string
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          slug: string
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          slug?: string
          title?: string
        }
        Relationships: []
      }
      equipment: {
        Row: {
          equipment_level: number | null
          function: string | null
          id: string
          name: string
          slug: string
          validation_status: string
        }
        Insert: {
          equipment_level?: number | null
          function?: string | null
          id?: string
          name: string
          slug: string
          validation_status?: string
        }
        Update: {
          equipment_level?: number | null
          function?: string | null
          id?: string
          name?: string
          slug?: string
          validation_status?: string
        }
        Relationships: []
      }
      evaluation_items: {
        Row: {
          competency_slug: string | null
          evaluation_id: string
          id: string
          prompt: string
          sort_order: number
        }
        Insert: {
          competency_slug?: string | null
          evaluation_id: string
          id?: string
          prompt: string
          sort_order: number
        }
        Update: {
          competency_slug?: string | null
          evaluation_id?: string
          id?: string
          prompt?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "evaluation_items_evaluation_id_fkey"
            columns: ["evaluation_id"]
            isOneToOne: false
            referencedRelation: "evaluations"
            referencedColumns: ["id"]
          },
        ]
      }
      evaluations: {
        Row: {
          id: string
          instructions: string | null
          lesson_id: string | null
          title: string
        }
        Insert: {
          id?: string
          instructions?: string | null
          lesson_id?: string | null
          title: string
        }
        Update: {
          id?: string
          instructions?: string | null
          lesson_id?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "evaluations_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      evidence: {
        Row: {
          created_at: string
          evaluation_id: string | null
          id: string
          lesson_id: string | null
          response: Json | null
          result: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          evaluation_id?: string | null
          id?: string
          lesson_id?: string | null
          response?: Json | null
          result?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          evaluation_id?: string | null
          id?: string
          lesson_id?: string | null
          response?: Json | null
          result?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "evidence_evaluation_id_fkey"
            columns: ["evaluation_id"]
            isOneToOne: false
            referencedRelation: "evaluations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "evidence_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_progress: {
        Row: {
          completed_at: string | null
          lesson_id: string
          started_at: string | null
          status: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          lesson_id: string
          started_at?: string | null
          status?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          lesson_id?: string
          started_at?: string | null
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_recipes: {
        Row: {
          lesson_id: string
          recipe_id: string
          sort_order: number
        }
        Insert: {
          lesson_id: string
          recipe_id: string
          sort_order?: number
        }
        Update: {
          lesson_id?: string
          recipe_id?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "lesson_recipes_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_recipes_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      lessons: {
        Row: {
          id: string
          lesson_type: string
          module_id: string
          objective: string | null
          slug: string
          sort_order: number
          title: string
        }
        Insert: {
          id?: string
          lesson_type?: string
          module_id: string
          objective?: string | null
          slug: string
          sort_order: number
          title: string
        }
        Update: {
          id?: string
          lesson_type?: string
          module_id?: string
          objective?: string | null
          slug?: string
          sort_order?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "lessons_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "modules"
            referencedColumns: ["id"]
          },
        ]
      }
      modules: {
        Row: {
          course_id: string
          expected_result: string | null
          guiding_question: string | null
          id: string
          slug: string
          sort_order: number
          title: string
        }
        Insert: {
          course_id: string
          expected_result?: string | null
          guiding_question?: string | null
          id?: string
          slug: string
          sort_order: number
          title: string
        }
        Update: {
          course_id?: string
          expected_result?: string | null
          guiding_question?: string | null
          id?: string
          slug?: string
          sort_order?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "modules_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          display_name: string | null
          id: string
        }
        Insert: {
          created_at?: string
          display_name?: string | null
          id: string
        }
        Update: {
          created_at?: string
          display_name?: string | null
          id?: string
        }
        Relationships: []
      }
      recipe_equipment: {
        Row: {
          equipment_id: string
          recipe_id: string
          requirement_type: string
          substitution: string | null
        }
        Insert: {
          equipment_id: string
          recipe_id: string
          requirement_type?: string
          substitution?: string | null
        }
        Update: {
          equipment_id?: string
          recipe_id?: string
          requirement_type?: string
          substitution?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recipe_equipment_equipment_id_fkey"
            columns: ["equipment_id"]
            isOneToOne: false
            referencedRelation: "equipment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipe_equipment_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_ingredients: {
        Row: {
          id: string
          name: string
          notes: string | null
          quantity: number | null
          recipe_id: string
          sort_order: number
          unit: string | null
        }
        Insert: {
          id?: string
          name: string
          notes?: string | null
          quantity?: number | null
          recipe_id: string
          sort_order?: number
          unit?: string | null
        }
        Update: {
          id?: string
          name?: string
          notes?: string | null
          quantity?: number | null
          recipe_id?: string
          sort_order?: number
          unit?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recipe_ingredients_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_progress: {
        Row: {
          completed_at: string | null
          current_step: number
          recipe_id: string
          status: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          current_step?: number
          recipe_id: string
          status?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          current_step?: number
          recipe_id?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recipe_progress_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_steps: {
        Row: {
          id: string
          instruction: string
          observation: string | null
          recipe_id: string
          sort_order: number
          temperature_text: string | null
          time_text: string | null
          title: string | null
        }
        Insert: {
          id?: string
          instruction: string
          observation?: string | null
          recipe_id: string
          sort_order: number
          temperature_text?: string | null
          time_text?: string | null
          title?: string | null
        }
        Update: {
          id?: string
          instruction?: string
          observation?: string | null
          recipe_id?: string
          sort_order?: number
          temperature_text?: string | null
          time_text?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recipe_steps_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_techniques: {
        Row: {
          primary_technique: boolean
          recipe_id: string
          technique_id: string
        }
        Insert: {
          primary_technique?: boolean
          recipe_id: string
          technique_id: string
        }
        Update: {
          primary_technique?: boolean
          recipe_id?: string
          technique_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recipe_techniques_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipe_techniques_technique_id_fkey"
            columns: ["technique_id"]
            isOneToOne: false
            referencedRelation: "techniques"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_variants: {
        Row: {
          adjustment: string | null
          description: string
          id: string
          recipe_id: string
          validation_status: string
          variant_type: string
        }
        Insert: {
          adjustment?: string | null
          description: string
          id?: string
          recipe_id: string
          validation_status?: string
          variant_type: string
        }
        Update: {
          adjustment?: string | null
          description?: string
          id?: string
          recipe_id?: string
          validation_status?: string
          variant_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "recipe_variants_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipes: {
        Row: {
          created_at: string
          difficulty: string | null
          id: string
          pedagogical_role: string | null
          production_enabled: boolean
          slug: string
          source_class: number | null
          source_demo: boolean
          source_id: number | null
          source_objective: string | null
          source_time: string | null
          source_yield: string | null
          title: string
          validation_status: string
        }
        Insert: {
          created_at?: string
          difficulty?: string | null
          id?: string
          pedagogical_role?: string | null
          production_enabled?: boolean
          slug: string
          source_class?: number | null
          source_demo?: boolean
          source_id?: number | null
          source_objective?: string | null
          source_time?: string | null
          source_yield?: string | null
          title: string
          validation_status?: string
        }
        Update: {
          created_at?: string
          difficulty?: string | null
          id?: string
          pedagogical_role?: string | null
          production_enabled?: boolean
          slug?: string
          source_class?: number | null
          source_demo?: boolean
          source_id?: number | null
          source_objective?: string | null
          source_time?: string | null
          source_yield?: string | null
          title?: string
          validation_status?: string
        }
        Relationships: []
      }
      techniques: {
        Row: {
          explanation: string | null
          id: string
          name: string
          slug: string
          validation_status: string
        }
        Insert: {
          explanation?: string | null
          id?: string
          name: string
          slug: string
          validation_status?: string
        }
        Update: {
          explanation?: string | null
          id?: string
          name?: string
          slug?: string
          validation_status?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
